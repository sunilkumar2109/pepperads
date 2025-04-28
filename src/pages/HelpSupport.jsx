// HelpSupport.tsx
import React from 'react';

const HelpSupport = () => {
  return (
    <div className="bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-red-500">Help</span> & Support
        </h1>
        <p className="text-gray-400 text-lg mb-12 animate-fade-in">
          Need a quick answer or technical help? We’ve got walkthroughs, FAQs, and live support to help you get unstuck fast.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "FAQs", desc: "Quick answers to common questions about setup, forms, and dashboard usage." },
            { title: "Integration Guides", desc: "Step-by-step help on connecting CRMs, analytics, and tracking tools." },
            { title: "Live Chat", desc: "Reach our support team in real time for urgent or technical issues." }
          ].map((item, i) => (
            <div key={i} className="bg-[#111] rounded-xl p-6 hover:shadow-red-500/30 transition-shadow shadow-md">
              <h3 className="text-xl font-semibold text-red-400 mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
