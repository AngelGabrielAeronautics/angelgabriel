import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Sender email must be a verified identity in SendGrid
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL!;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@angelgabriel.co.za';


export async function POST(request: Request) {
  try {
    // Validate SendGrid API key
    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_API_KEY.startsWith('SG.')) {
      console.error('Missing or invalid SendGrid API key:', process.env.SENDGRID_API_KEY);
      return NextResponse.json({ success: false, error: 'Misconfigured SendGrid API key' }, { status: 500 });
    }
    const payload = await request.json();
    console.log('Contact form payload:', JSON.stringify(payload));
    const { firstName, lastName, email, message } = payload;

    // Send to contact email
    try {
      await sgMail.send({
        to: CONTACT_EMAIL,
        from: FROM_EMAIL,
        subject: 'New Contact Form Submission',
        text: `New contact form submission:
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}`,
      });
    } catch (err) {
      console.error('Error sending contact email:', err);
      return NextResponse.json({ success: false, error: 'Failed to send contact email' }, { status: 500 });
    }

    // Send confirmation to user
    try {
      await sgMail.send({
        to: email,
        from: FROM_EMAIL,
        subject: 'Your Message Has Been Received',
        text: `Hi ${firstName},\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nBest regards,\nAngel Gabriel Aeronautics`,
      });
    } catch (err) {
      // Log error but don't fail the request if user confirmation fails
      console.error('Error sending user confirmation email for contact form:', err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Unhandled error in contact form route:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
} 