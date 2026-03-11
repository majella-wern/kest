import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, message } = await request.json();

    // Validate input
    if (!email || !message) {
      return new Response(JSON.stringify({ error: 'Email and message are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Send email to your business email (change this to your actual email)
    await resend.emails.send({
      from: 'Majella Travel <noreply@majella-travel.com>', // Use a verified domain
      to: ['info@majella-travel.com'], // Your business email to receive bookings
      subject: 'New Booking Request',
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Customer Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      reply_to: email // Allow replying directly to customer
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}