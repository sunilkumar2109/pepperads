import React from 'react';
import { Send } from 'lucide-react';

const HelpCentre = () => {
  return (
    <section id="help-centre" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-8 text-center">Help Centre</h2>
          
          {/* Large Centered Image */}
          <div className="w-full max-w-4xl h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl ml-24">
            <img 
              src="https://i.postimg.cc/sgTGhMSX/help-centre.png" 
              alt="Customer support team" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <p className="text-gray-300 text-xl text-center max-w-3xl leading-relaxed">
            Our dedicated support team is ready to assist you with any questions or issues you may have.
            Reach out through the form below or explore our other help options.
          </p>
        </div>

        {/* Form Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Contact Us</h3>
            <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          
          <div className="bg-[#1A1A1A] p-10 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <form>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <label className="block text-gray-300 text-lg font-medium" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#252525] border-2 border-gray-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#E31B23] transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-gray-300 text-lg font-medium" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#252525] border-2 border-gray-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#E31B23] transition-all"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-8 space-y-4">
                <label className="block text-gray-300 text-lg font-medium" htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-[#252525] border-2 border-gray-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#E31B23] transition-all"
                  placeholder="What can we help you with?"
                  required
                />
              </div>
              
              <div className="mb-8 space-y-4">
                <label className="block text-gray-300 text-lg font-medium" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  className="w-full bg-[#252525] border-2 border-gray-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#E31B23] transition-all"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-center mt-12">
                <button 
                  type="submit" 
                  className="bg-[#E31B23] hover:bg-red-700 text-white text-lg font-semibold px-10 py-5 rounded-xl flex items-center justify-center transition-all transform hover:scale-105 shadow-lg"
                >
                  <Send className="mr-3 h-6 w-6" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Help Options */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Other Ways to Get Help</h3>
          <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#1A1A1A] p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-[#E31B23]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#E31B23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">Knowledge Base</h4>
              <p className="text-gray-400 mb-6">Browse our comprehensive documentation and FAQs</p>
              <button className="text-[#E31B23] font-medium hover:underline">Visit Help Articles →</button>
            </div>
            
            <div className="bg-[#1A1A1A] p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-[#E31B23]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#E31B23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">Live Chat</h4>
              <p className="text-gray-400 mb-6">Chat with our support team in real-time</p>
              <button className="text-[#E31B23] font-medium hover:underline">Start Chat →</button>
            </div>
            
            <div className="bg-[#1A1A1A] p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-[#E31B23]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#E31B23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">Community</h4>
              <p className="text-gray-400 mb-6">Connect with other users in our forum</p>
              <button className="text-[#E31B23] font-medium hover:underline">Join Community →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCentre;