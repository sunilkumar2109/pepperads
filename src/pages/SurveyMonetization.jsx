// SurveyMonetization.tsx
import React from 'react';

const SurveyMonetization = () => {
  return (
    <div className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6">
          Survey <span className="text-red-400">Monetization</span>
        </h1>
        <p className="text-center text-gray-400 text-lg mb-12">
          Turn engagement into earnings — from funnels to partner dashboards and beyond.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Offer Selection",
              desc: "Choose offers that match your audience for better conversion and user satisfaction."
            },
            {
              title: "Dashboard & Pepeleads",
              desc: "Track your traffic, conversions, and payouts in real time using our performance dashboard."
            },
            {
              title: "Funnels That Work",
              desc: "Structure quiz and feedback flows that boost retention and drive qualified traffic."
            },
            {
              title: "Automation & Rewards",
              desc: "Use automated systems to reward users post-submission and increase return visits."
            }
          ].map((card, i) => (
            <div key={i} className="bg-[#111] rounded-xl p-6 hover:shadow-green-500/30 transition-shadow shadow-md">
              <h3 className="text-xl font-semibold text-red-400 mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyMonetization;
