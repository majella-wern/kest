import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, message } = await request.json();
    
    await resend.emails.send({
      from: 'test@resend.dev',  // Update with your verified domain
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
      `
    });
    
    return Response.json({ success: true, message: 'Email sent!' });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
