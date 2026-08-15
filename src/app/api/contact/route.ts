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

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      subject: `New Cresm Lead: ${name} from ${company || 'Unknown Company'}`,
      html: `
        <h2>New Lead from Cresm Demo Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>PAN:</strong> ${pan || 'N/A'}</p>
        <p><strong>Monthly Volume:</strong> ${volume || 'N/A'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
