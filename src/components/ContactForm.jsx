import React from 'react';
import { Send, Phone } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-20 px-4 bg-[#1A1A1A]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Want help getting started? Or a personalized demo?
          </h2>
          <p className="text-gray-400">
            Fill out this form and we'll get back to you
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E31B23]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E31B23]"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">
              Business Type
            </label>
            <select
              id="business"
              className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E31B23]"
            >
              <option value="">Select your business type</option>
              <option value="startup">Startup</option>
              <option value="enterprise">Enterprise</option>
              <option value="agency">Agency</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              What you're trying to build
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E31B23]"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <div className="flex flex-wrap gap-4">
            <button type="submit" className="btn-primary flex items-center">
              <Send className="mr-2 h-5 w-5" />
              Talk to Us
            </button>
            <button type="button" className="btn-secondary flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Request a Custom Demo
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;