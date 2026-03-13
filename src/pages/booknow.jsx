// src/pages/BookNow.jsx
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function BookNow() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  // ← REPLACE THESE 3 KEYS FROM emailjs.com dashboard
  const SERVICE_ID = 'service_705pzha';
const TEMPLATE_ID = 'template_te6f7au';
const PUBLIC_KEY = '2Vx08v786tnG_tQQ5';

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('Booking...');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      setStatus('Booking confirmed! 🎉');
      setTimeout(() => navigate('/'), 2500); // Redirect home
    } catch (error) {
      setStatus(error);
      console.error('EmailJS error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 py-12">
      <div className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Book Now
          </h1>
          <p className="text-gray-600">Secure your seats for This Year's Play</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
            <input 
              type="text" 
              name="user_name" 
              required
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
            <input 
              type="email" 
              name="user_email" 
              required
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Phone</label>
            <input 
              type="tel" 
              name="phone" 
              required
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all"
              placeholder="+63 912 345 6789"
            />
          </div>

          {/* Show Date */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Preferred Show Date</label>
            <select name="show_date" required className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400">
              <option value="">Select date</option>
              <option value="March 20, 2026">March 20, 2026 - 7PM</option>
              <option value="March 21, 2026">March 21, 2026 - 2PM</option>
              <option value="March 22, 2026">March 22, 2026 - 7PM</option>
            </select>
          </div>

          {/* Tickets */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Number of Tickets</label>
            <select name="tickets" required className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400">
              <option value="">Select quantity</option>
              <option value="1">1 Ticket - ₱1,500</option>
              <option value="2">2 Tickets - ₱2,800</option>
              <option value="4">4 Tickets - ₱5,400</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Special Requests</label>
            <textarea 
              name="message" 
              rows="4"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 resize-vertical"
              placeholder="Seating preferences, accessibility needs, etc."
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'Booking...'}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6 px-8 rounded-2xl font-bold text-lg shadow-xl hover:from-purple-700 hover:to-blue-700 transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'Booking...' ? '🎭 Securing Seats...' : '🎭 BOOK NOW & PAY LATER'}
          </button>

          {status && (
            <div className={`p-4 rounded-xl text-center font-semibold ${
              status.includes('confirmed') 
                ? 'bg-green-100 border-2 border-green-300 text-green-800' 
                : 'bg-red-100 border-2 border-red-300 text-red-800'
            }`}>
              {status}
            </div>
          )}
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          Secure booking • No payment now • Confirm via email
        </p>
      </div>
    </div>
  );
}
