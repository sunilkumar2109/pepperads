import React, { useEffect, useState } from "react";
import { ExternalLink, Rocket } from "lucide-react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Features = () => {
  const [currentFeatures, setCurrentFeatures] = useState([]);
  const [upcomingFeatures, setUpcomingFeatures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const ref = doc(db, "pageContent", "features");
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setCurrentFeatures(data["currentFeatures"] || []);
        setUpcomingFeatures(data["upcoming features"] || []);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="features" className="py-20 px-4 bg-[#1A1A1A] relative overflow-hidden">
      <div className="absolute top-40 left-20 w-96 h-96 bg-[#E31B23] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#E31B23] opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="section-title text-center text-white text-3xl font-bold mb-16">Features</h2>

        {/* ===== CURRENT FEATURES ===== */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center text-white">
            <span className="text-[#E31B23] mr-2">✓</span> You Can Already Use
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentFeatures.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} desc={feature.description} />
            ))}
          </div>
        </div>

        {/* ===== UPCOMING FEATURES ===== */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center text-white">
            <Rocket className="text-[#E31B23] mr-2 h-6 w-6" /> Coming Very Soon
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} desc={feature.description} />
            ))}
          </div>
        </div>

        {/* ===== CTA LINK ===== */}
        <div className="mt-16 text-center">
          <a href="#examples" className="inline-flex items-center text-[#E31B23] hover:text-red-400 transition-colors">
            See what we have already helped build
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, desc }) => (
  <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-xl p-6 aspect-square flex flex-col items-center justify-center text-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:border-[#E31B23] hover:bg-opacity-10 hover:shadow-xl hover:shadow-[#E31B23]/10">
    <div className="p-4 bg-[#E31B23] bg-opacity-10 rounded-full mb-6">
      <Rocket className="h-8 w-8 text-[#E31B23]" />
    </div>
    <h4 className="text-xl font-semibold mb-3 text-white hover:text-[#E31B23] transition-colors duration-300">
      {title || "No title"}
    </h4>
    <p className="text-gray-400">{desc || "No description provided."}</p>
  </div>
);

export default Features;
