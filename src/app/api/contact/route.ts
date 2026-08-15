import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { company, pan, name, email, volume } = data;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if SMTP settings are configured in env
    const hasSmtpConfig = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

    if (!hasSmtpConfig) {
      console.log('--- NEW LEAD RECEIVED (Email not sent because SMTP is not configured) ---');
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Company: ${company || 'N/A'}`);
      console.log(`PAN: ${pan || 'N/A'}`);
      console.log(`Volume: ${volume || 'N/A'}`);
      console.log('-------------------------------------------------------------------------');
      
      return NextResponse.json({ success: true, message: 'Lead captured (Development Mode)' });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: parseInt(process.env.SMTP_PORT || '465') === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false } // Helps prevent certificate issues with Zoho
    });

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; color: #111111; margin: 0; padding: 40px 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          
          <!-- Header -->
          <div style="background-color: #111111; padding: 40px 32px; text-align: center;">
            <img src="https://raw.githubusercontent.com/Asenra-Org/Credent-landingpage/main/public/logo.jpg" alt="Cresem" style="width: 48px; height: 48px; margin-bottom: 16px; border-radius: 4px;" />
            <h1 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.2em; color: #ffffff; text-transform: uppercase;">Cresem</h1>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 32px;">
            <h2 style="margin: 0 0 32px 0; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #71717a; border-bottom: 1px solid #e4e4e7; padding-bottom: 16px;">
              New Demo Request
            </h2>
            
            <div style="margin-bottom: 24px;">
              <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; margin-bottom: 4px;">Full Name</div>
              <div style="font-size: 16px; font-weight: 600; color: #111111;">${name}</div>
            </div>
            
            <div style="margin-bottom: 24px;">
              <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; margin-bottom: 4px;">Email Address</div>
              <div style="font-size: 16px; font-weight: 500; color: #111111;">
                <a href="mailto:${email}" style="color: #111111; text-decoration: underline;">${email}</a>
              </div>
            </div>
            
            <div style="margin-bottom: 24px;">
              <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; margin-bottom: 4px;">Company</div>
              <div style="font-size: 16px; font-weight: 500; color: #111111;">${company || '<span style="color: #a1a1aa; font-style: italic;">Not Provided</span>'}</div>
            </div>
            
            <div style="margin-bottom: 24px;">
              <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; margin-bottom: 4px;">PAN Number</div>
              <div style="font-size: 16px; font-weight: 500; color: #111111; font-family: monospace; letter-spacing: 0.1em;">${pan || '<span style="color: #a1a1aa; font-style: italic; font-family: sans-serif; letter-spacing: normal;">Not Provided</span>'}</div>
            </div>
            
            <div style="margin-bottom: 8px;">
              <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; margin-bottom: 4px;">Trading Volume</div>
              <div style="font-size: 16px; font-weight: 500; color: #111111;">${volume || '<span style="color: #a1a1aa; font-style: italic;">Not Provided</span>'}</div>
            </div>
            
          </div>
          
          <!-- Footer -->
          <div style="background-color: #fafafa; padding: 24px 32px; border-top: 1px solid #e4e4e7; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #a1a1aa;">
              This is an automated system notification from the Cresem Platform.<br/>
              Confidential & Internal Use Only.
            </p>
          </div>
          
        </div>
      </div>
    `;

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      subject: `New Cresem Lead: ${name} from ${company || 'Unknown Company'}`,
      html: emailHtml,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
