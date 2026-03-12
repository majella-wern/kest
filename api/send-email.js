// api/send-email/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, message } = await request.json();
    
    // Log to Vercel dashboard
    console.log('📧 Form received:', { email, message });
    
    // Return immediately (test without Resend first)
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Form works!' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
