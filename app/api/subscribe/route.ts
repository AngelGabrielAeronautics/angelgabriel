import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import * as sendgridClient from '@sendgrid/client';

// Infer the ClientRequest type from the sendgridClient.request function
// This is more robust than relying on internal paths like '@sendgrid/client/src/client'
// and ensures that 'HttpMethod' is correctly inferred as part of the request type.
type ClientRequest = Parameters<typeof sendgridClient.request>[0];

// Initialize SendGrid Mail and Client
if (!process.env.SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is not set.');
  throw new Error('SENDGRID_API_KEY is not set.');
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sendgridClient.setApiKey(process.env.SENDGRID_API_KEY);

const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL;
const ADMIN_EMAIL = process.env.SALES_EMAIL || 'quotes@angelgabriel.co.za'; // Admin to notify
const SUBSCRIBER_CONFIRMATION_TEMPLATE_ID = 'd-db641660670e475ca4df368ac391ea03';
const COMPANY_NAME = "Angel Gabriel Aeronautics";
const SITE_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://flyangelgabriel.com";
const COMPANY_WEBSITE = process.env.NEXT_PUBLIC_SITE_URL || "https://flyangelgabriel.com";

export async function POST(request: Request) {
  try {
    if (!FROM_EMAIL) {
      console.error('SENDGRID_FROM_EMAIL is not set.');
      return NextResponse.json({ success: false, error: 'Email service misconfigured (from address)' }, { status: 500 });
    }

    const { email } = await request.json();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ success: false, error: 'Valid email is required' }, { status: 400 });
    }

    // 1. Add/Update contact in SendGrid
    //    Documentation: https://docs.sendgrid.com/api-reference/contacts/add-or-update-a-contact
    try {
      const contactData = {
        list_ids: ['f23c6bdd-df64-446f-a2ff-7f0419dc4911'],
        contacts: [{ email: email }]
      };
      // Types for @sendgrid/client are not always perfect, using `as any` for the request.
      const sgRequest: ClientRequest = { 
        url: `/v3/marketing/contacts`,
        method: 'PUT', // This should now be compatible with the inferred HttpMethod type within ClientRequest
        body: contactData as any, // Using 'as any' due to potential type mismatches in SDK for complex bodies
      };
      await sendgridClient.request(sgRequest);
      console.log(`Contact ${email} added/updated in SendGrid.`);
    } catch (error: any) {
      console.error('Error adding contact to SendGrid:', error.response ? error.response.body : error);
      // Don't stop the process if contact adding fails, email confirmation is still important
      // But do log it for investigation.
    }

    // 2. Send confirmation email to the subscriber
    try {
      const templateData = {
        email: email,
        companyName: COMPANY_NAME,
        siteBaseUrl: SITE_BASE_URL,
        companyWebsite: COMPANY_WEBSITE,
        contactEmail: FROM_EMAIL,
        currentYear: new Date().getFullYear(),
        // SendGrid will populate unsubscribe_url and unsubscribe_preferences_url automatically
      };

      await sgMail.send({
        to: email,
        from: { email: FROM_EMAIL, name: COMPANY_NAME },
        templateId: SUBSCRIBER_CONFIRMATION_TEMPLATE_ID,
        dynamicTemplateData: templateData,
        asm: {
          groupId: 48508, // Specifies the Unsubscribe Group ID
          // Optionally, you can specify which groups to display on the preferences page:
          // groupsToDisplay: [48508]
        },
        trackingSettings: { 
          subscriptionTracking: { 
            enable: true // Ensures SendGrid unsubscribe links work with your lists
          } 
        },
        hideWarnings: true, 
      });
      console.log(`Subscription confirmation email sent to ${email}`);
    } catch (error: any) {
      console.error('Error sending subscription confirmation email:', error.response ? error.response.body : error);
      // If this fails, it's a significant issue for the user experience.
      return NextResponse.json({ success: false, error: 'Failed to send confirmation email' }, { status: 500 });
    }

    // 3. Send notification email to admin
    try {
      await sgMail.send({
        to: ADMIN_EMAIL,
        from: { email: FROM_EMAIL, name: 'System Notification' },
        subject: `New Newsletter Subscriber: ${email}`,
        text: `A new user has subscribed to the newsletter: ${email}`,
        html: `<p>A new user has subscribed to the newsletter:</p><p><strong>Email:</strong> ${email}</p>`,
      });
      console.log(`Admin notification for new subscriber ${email} sent to ${ADMIN_EMAIL}`);
    } catch (error: any) {
      console.error('Error sending admin notification email:', error.response ? error.response.body : error);
      // Log this error, but don't fail the request for the user if admin notification fails
    }

    return NextResponse.json({ success: true, message: 'Successfully subscribed!' });

  } catch (error: any) {
    console.error('Unhandled error in subscription route:', error);
    return NextResponse.json({ success: false, error: 'Server error during subscription' }, { status: 500 });
  }
} 