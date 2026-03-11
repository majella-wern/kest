// api/send-email/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, message } = await request.json();
    await resend.emails.send({
      from: 'test@resend.dev',
      to: [email],
      subject: 'Booking Confirmation',
      html: `<h2>Booking Request</h2><p>Email: ${email}</p><p>${message}</p>`
    });
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// ADD THIS - handles browser visits
export async function GET() {
  return Response.json({ message: 'POST only endpoint' }, { status: 405 });
}
