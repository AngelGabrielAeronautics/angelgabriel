import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Sender email must be a verified identity in SendGrid
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL!;

export async function POST(request: Request) {
  try {
    // Validate SendGrid API key
    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_API_KEY.startsWith('SG.')) {
      console.error('Missing or invalid SendGrid API key:', process.env.SENDGRID_API_KEY);
      return NextResponse.json({ success: false, error: 'Misconfigured SendGrid API key' }, { status: 500 });
    }
    // Parse incoming JSON body once
    const payload = await request.json();
    console.log('QuoteRequest payload:', JSON.stringify(payload));
    const { formData, travelDate, returnDate, additionalRoutes } = payload;
    const salesEmail = process.env.SALES_EMAIL || 'sales@angelgabriel.co.za';
    const userEmail = formData.email;

    // Send to sales
    try {
      await sgMail.send({
        to: salesEmail,
        from: FROM_EMAIL,
        subject: 'New Charter Quote Request',
        text: `New Quote Request: ${JSON.stringify({ ...formData, travelDate, returnDate, additionalRoutes })}`,
      });
    } catch (err) {
      console.error('Error sending sales email:', err);
      return NextResponse.json({ success: false, error: 'Failed to send sales email' }, { status: 500 });
    }

    // Send confirmation to user
    try {
      await sgMail.send({
        to: userEmail,
        from: FROM_EMAIL,
        subject: 'Your Quote Request Received',
        text: `Hi ${formData.firstName},\n\nThank you for your quote request. We have received your details and will get back to you shortly.\n\nBest regards,\nAngel Gabriel Aeronautics`,
      });
    } catch (err) {
      console.error('Error sending confirmation email:', err);
      return NextResponse.json({ success: false, error: 'Failed to send confirmation email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Unhandled error in QuoteRequest route:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
} 