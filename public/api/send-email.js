import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { email, message } = await request.json();
  
  await resend.emails.send({
    from: 'Booking <noreply@kest.com>',
    to: [email],
    subject: 'Booking Confirmation',
    html: `<p>New booking request: ${message}</p>`
  });
  
  return new Response('Success', { status: 200 });
}