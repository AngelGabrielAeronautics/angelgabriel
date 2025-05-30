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
    console.log('Using SendGrid API Key configured:', !!process.env.SENDGRID_API_KEY);
    console.log('Using FROM_EMAIL:', FROM_EMAIL);
    console.log('Target salesEmail:', salesEmail);

    // --- Helper function to format data for HTML email ---
    const formatForHtml = (data: any): string => {
      let html = '<ul style="list-style-type: none; padding: 0;">';
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const value = data[key];
          const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
          if (typeof value === 'object' && value !== null) {
            html += `<li style="margin-bottom: 10px;"><strong>${formattedKey}:</strong>${formatForHtml(value)}</li>`;
          } else {
            let displayValue;
            if (value === true) {
              displayValue = '<span style="color: red;">Yes</span>';
            } else {
              displayValue = value || 'N/A';
            }
            html += `<li style="margin-bottom: 5px;"><strong>${formattedKey}:</strong> ${displayValue}</li>`;
          }
        }
      }
      html += '</ul>';
      return html;
    };

    // --- Construct HTML for the sales email ---
    let salesEmailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #191100;">New Charter Quote Request</h1>
        
        <h2 style="color: #241700; border-bottom: 1px solid #eee; padding-bottom: 5px;">Booker Details</h2>
        <p><strong>First Name:</strong> ${formData.firstName}</p>
        <p><strong>Last Name:</strong> ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>

        <h2 style="color: #241700; border-bottom: 1px solid #eee; padding-bottom: 5px;">Routing Details</h2>
        <p><strong>Routing Type:</strong> ${formData.routingType.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</p>
    `;

    if (formData.routingType === 'oneWay') {
      salesEmailHtml += `
        <p><strong>From:</strong> ${formData.fromLocation}</p>
        <p><strong>To:</strong> ${formData.toLocation}</p>
        <p><strong>Date of Travel:</strong> ${travelDate ? new Date(travelDate).toLocaleDateString('en-GB') : 'N/A'}</p>
      `;
    } else if (formData.routingType === 'return') {
      salesEmailHtml += `
        <p><strong>From:</strong> ${formData.fromLocation}</p>
        <p><strong>To:</strong> ${formData.toLocation}</p>
        <p><strong>Date of Travel:</strong> ${travelDate ? new Date(travelDate).toLocaleDateString('en-GB') : 'N/A'}</p>
        <p><strong>Return Date:</strong> ${returnDate ? new Date(returnDate).toLocaleDateString('en-GB') : 'N/A'}</p>
      `;
    } else if (formData.routingType === 'multiDestination' && additionalRoutes && additionalRoutes.length > 0) {
      salesEmailHtml += '<h3>Legs:</h3>';
      additionalRoutes.forEach((route: { from: string; to: string; date: string }, index: number) => {
        salesEmailHtml += `
          <div style="margin-left: 20px; margin-bottom:15px; border-left: 2px solid #ccc; padding-left: 15px;">
            <h4>Leg ${index + 1}</h4>
            <p><strong>From:</strong> ${route.from}</p>
            <p><strong>To:</strong> ${route.to}</p>
            <p><strong>Date:</strong> ${route.date ? new Date(route.date).toLocaleDateString('en-GB') : 'N/A'}</p>
          </div>
        `;
      });
    }

    salesEmailHtml += `
      <p><strong>Number of Passengers:</strong> ${formData.passengers || 'N/A'}</p>

      <h2 style="color: #241700; border-bottom: 1px solid #eee; padding-bottom: 5px;">Aircraft Preferences</h2>
      ${formatForHtml(formData.aircraft)}

      <h2 style="color: #241700; border-bottom: 1px solid #eee; padding-bottom: 5px;">Bolt-ons</h2>
      ${formatForHtml(formData.boltOns)}

      <h2 style="color: #241700; border-bottom: 1px solid #eee; padding-bottom: 5px;">Notes/Comments</h2>
      <p style="white-space: pre-wrap;">${formData.notes || 'N/A'}</p>

      <h2 style="color: #241700; border-bottom: 1px solid #eee; padding-bottom: 5px;">Subscription</h2>
      <p>${formData.subscribe ? 'Yes, subscribed to newsletter.' : 'No, not subscribed.'}</p>
      
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
      <p style="font-size: 0.9em; color: #777;">This email was generated automatically from the website quote request form.</p>
    </div>
    `;

    // Send to sales
    try {
      const [salesResponse] = await sgMail.send({
        to: salesEmail,
        from: { email: FROM_EMAIL, name: 'Angel Gabriel' },
        subject: 'New Charter Quote Request',
        html: salesEmailHtml,
        text: `New Quote Request: ${JSON.stringify({ ...formData, travelDate, returnDate, additionalRoutes })}`,
      });
      console.log('Sales email send response:', salesResponse.statusCode, salesResponse.headers);
    } catch (err) {
      console.error('Error sending sales email:', err);
      return NextResponse.json({ success: false, error: 'Failed to send sales email' }, { status: 500 });
    }

    // Send confirmation to user
    try {
      // Prepare data for the SendGrid dynamic template
      const aircraftPreferencesList = [];
      if (formData.aircraft.mostEconomical) aircraftPreferencesList.push('Most Economical');
      if (formData.aircraft.pressurised) aircraftPreferencesList.push('Pressurised Cabin');
      if (formData.aircraft.twinEngine) aircraftPreferencesList.push('Twin Engine');

      const boltOnsList = [];
      if (formData.boltOns.meetAndGreet) boltOnsList.push('Meet and Greet off connecting flight');
      if (formData.boltOns.fullMeal) boltOnsList.push('Full In-flight Meal');
      if (formData.boltOns.airportShuttle) boltOnsList.push('Airport / Hotel Shuttle');
      if (formData.boltOns.security) boltOnsList.push('Personal Security CPO');

      let routingTypeDisplay = 'One Way Trip';
      if (formData.routingType === 'return') routingTypeDisplay = 'Return Trip';
      if (formData.routingType === 'multiDestination') routingTypeDisplay = 'Multi-Destination Trip';

      const templateData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: userEmail,
        routingTypeDisplay,
        fromLocation: formData.fromLocation, // Used for one-way/return
        toLocation: formData.toLocation,     // Used for one-way/return
        travelDate: travelDate ? new Date(travelDate).toLocaleDateString('en-GB') : 'N/A',
        returnDate: returnDate ? new Date(returnDate).toLocaleDateString('en-GB') : 'N/A',
        legs: formData.routingType === 'multiDestination' && additionalRoutes ? 
              additionalRoutes.map((leg: { from: string; to: string; date: string }, index: number) => ({
                from: leg.from,
                to: leg.to,
                dateFormatted: leg.date ? new Date(leg.date).toLocaleDateString('en-GB') : 'N/A',
                legNumber: index + 1
              })) : [],
        passengers: formData.passengers || 'N/A',
        notes: formData.notes || 'N/A',
        isSubscribed: formData.subscribe,
        hasAircraftPreferences: aircraftPreferencesList.length > 0,
        aircraftPreferences: aircraftPreferencesList,
        hasBoltOns: boltOnsList.length > 0,
        boltOns: boltOnsList,
        currentYear: new Date().getFullYear(),
        companyName: "Angel Gabriel Aeronautics",
        companyWebsite: "https://www.angelgabriel.co.za", // You might want to put this in an env var
        contactEmail: FROM_EMAIL, // Using the verified sender email as contact
        siteBaseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.angelgabriel.co.za", // For logo URL
        isOneWay: formData.routingType === 'oneWay',
        isReturn: formData.routingType === 'return',
        isMultiDestination: formData.routingType === 'multiDestination',
      };

      const [userResponse] = await sgMail.send({
        to: userEmail,
        from: { email: FROM_EMAIL, name: 'Angel Gabriel' }, // This must be a SendGrid verified sender
        subject: 'Your Quote Request - Angel Gabriel Aeronautics',
        templateId: 'd-4eff343dbd2649fcb583ada62d4b960e',
        dynamicTemplateData: templateData,
      });
      console.log('User confirmation email send response (template):', userResponse.statusCode, userResponse.headers);
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