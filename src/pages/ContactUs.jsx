// ContactUs.tsx
import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Contact <span className="text-red-400">Us</span>
        </h1>
        <p className="text-gray-400 text-lg mb-12 animate-fade-in">
          Drop us a message and we’ll connect you with the right specialist for your needs.
        </p>

        <form className="bg-[#111] rounded-xl p-8 max-w-xl mx-auto space-y-6 shadow-md">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-black border border-gray-600 text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-black border border-gray-600 text-white" />
          <textarea placeholder="Your Message" rows={5} className="w-full p-3 rounded bg-black border border-gray-600 text-white"></textarea>
          <button type="submit" className="bg-red-400 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-300 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
