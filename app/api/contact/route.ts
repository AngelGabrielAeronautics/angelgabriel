import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Sender email must be a verified identity in SendGrid
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL!;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@angelgabriel.co.za';
const CONTACT_FORM_CONFIRMATION_TEMPLATE_ID = 'd-e58033b4da1f44658511df1a75460b10f';
const COMPANY_NAME = "Angel Gabriel Aeronautics";
const SITE_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://flyangelgabriel.com";


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

    // Send to contact email (internal notification)
    try {
      const adminEmailHtml = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h1 style="color: #191100;">New Contact Form Submission</h1>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 0.9em; color: #777;">This email was generated automatically from the website contact form.</p>
        </div>
      `;
      await sgMail.send({
        to: CONTACT_EMAIL,
        from: { email: FROM_EMAIL, name: 'Website Contact Form' },
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: adminEmailHtml,
        text: `New contact form submission:
Name: ${firstName} ${lastName}
Email: ${email}
Message: ${message}`,
      });
    } catch (err) {
      console.error('Error sending contact email to admin:', err);
      // We can choose to still proceed with user confirmation even if admin email fails
      // return NextResponse.json({ success: false, error: 'Failed to send contact email' }, { status: 500 });
    }

    // Send confirmation to user using dynamic template
    try {
      const templateData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message, // Make sure your template 'd-e58033b4da1f44658511df1a75460b10f' expects this
        currentYear: new Date().getFullYear(),
        companyName: COMPANY_NAME,
        companyWebsite: SITE_BASE_URL, 
        contactEmail: FROM_EMAIL, 
        siteBaseUrl: SITE_BASE_URL,
      };

      await sgMail.send({
        to: email,
        from: { email: FROM_EMAIL, name: COMPANY_NAME },
        templateId: CONTACT_FORM_CONFIRMATION_TEMPLATE_ID,
        dynamicTemplateData: templateData,
        // You might want to add ASM group ID for unsubscribe management if relevant for contact confirmations
        // asm: { 
        //   groupId: YOUR_UNSUBSCRIBE_GROUP_ID_FOR_CONTACTS, 
        // },
      });
    } catch (err: any) {
      // Log error but don't fail the request if user confirmation fails
      console.error('Error sending user confirmation email for contact form:', err.response?.body || err.message);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Unhandled error in contact form route:', error.response?.body || error.message);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
} 