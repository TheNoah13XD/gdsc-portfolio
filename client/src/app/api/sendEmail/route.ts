import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  
  const body = await req.json();
  const { name, email, text } = body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MAILER_EMAIL,
      pass: process.env.MAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAILER_EMAIL,
    to: process.env.MAILER_EMAIL,
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${text}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false });
  }
}
