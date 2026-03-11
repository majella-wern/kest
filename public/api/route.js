import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ error: 'Email and message are required' });
    }

    await resend.emails.send({
      from: 'test@resend.dev',
      to: [email],
      subject: 'Booking Confirmation - Kest',
      html: `
        <h2>🎉 Booking Request Received!</h2>
        <p>Thank you for your booking interest!</p>
        <h3>Details:</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Request:</strong> ${message}</p>
        <p>We will contact you shortly to confirm.</p>
        <hr>
        <small>Automated message from Kest Booking System</small>
      `,
      reply_to: email
    });

    return res.status(200).json({ success: true, message: 'Email sent!' });
  } catch (error) {
    console.error('send-email error:', error);
    return res.status(500).json({ error: error.message });
  }
}