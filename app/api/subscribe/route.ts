import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Sender email must be a verified identity in SendGrid
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL!;
// This would typically be a mailing list address or an internal notification email
const NEWSLETTER_EMAIL = process.env.NEWSLETTER_EMAIL || 'newsletter@angelgabriel.co.za'; 

export async function POST(request: Request) {
  try {
    // Validate SendGrid API key
    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_API_KEY.startsWith('SG.')) {
      console.error('Missing or invalid SendGrid API key:', process.env.SENDGRID_API_KEY);
      return NextResponse.json({ success: false, error: 'Misconfigured SendGrid API key' }, { status: 500 });
    }
    const payload = await request.json();
    console.log('Newsletter subscription payload:', JSON.stringify(payload));
    const { email } = payload;

    if (!email) {
      return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
    }

    // Send notification email (e.g., to a mailing list manager or a general inbox)
    try {
      await sgMail.send({
        to: NEWSLETTER_EMAIL,
        from: FROM_EMAIL,
        subject: 'New Newsletter Subscription',
        text: `New newsletter subscription: ${email}`,
      });
    } catch (err) {
      console.error('Error sending newsletter subscription email:', err);
      // Do not block user-facing success if this internal notification fails, but log it.
    }
    
    // Consider adding the user to a SendGrid contact list here in a real application

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Unhandled error in subscribe route:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
} 