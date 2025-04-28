import React, { useEffect, useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { db } from '../firebase'; // Your Firebase setup file
import { doc, getDoc } from 'firebase/firestore';

const ResourceCenter = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, 'pageContent', 'resourceCenter');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContent(docSnap.data());
      }
    };
    fetchContent();
  }, []);

  if (!content) return <p className="text-center text-white">Loading...</p>;

  return (
    <section id="resources" className="py-12 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-3">
          {content.heading.split(' ').map((word, i) =>
            word.toLowerCase().includes('micro-guides') ? (
              <span key={i} className="text-[#E31B23]">{word} </span>
            ) : (
              word + ' '
            )
          )}
        </h2>
        <p className="text-center text-gray-400 text-sm md:text-base mb-8 md:mb-10 max-w-2xl mx-auto">
          {content.subheading}
        </p>

        {/* Current Guides */}
        <div className="mb-10">
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center justify-center md:justify-start text-white">
            <BookOpen className="text-[#E31B23] mr-2 h-4 w-4 md:h-5 md:w-5" />
            {content.currentTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {content.currentGuides.map((guide, index) => (
              <div
                key={index}
                className="relative bg-[#1A1A1A] rounded-lg overflow-hidden border border-gray-800 hover:border-[#E31B23]/50 transition-all duration-300 aspect-square flex flex-col"
              >
                <div className="flex-[3] overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-[1] p-3 md:p-4 flex flex-col justify-between">
                  <h4 className="text-sm md:text-base font-semibold text-white line-clamp-2">
                    {guide.title}
                  </h4>
                  <button className="text-[#E31B23] text-xs md:text-sm font-medium flex items-center self-start mt-2">
                    Explore
                    <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-8 md:mt-10">
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center justify-center md:justify-start text-white">
            <BookOpen className="text-[#E31B23] mr-2 h-4 w-4 md:h-5 md:w-5" />
            {content.comingSoonTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {content.upcomingGuides.map((guide, index) => (
              <div
                key={index}
                className="relative bg-[#1A1A1A] rounded-lg overflow-hidden border border-gray-800 hover:border-[#E31B23]/50 transition-all duration-300 aspect-square flex flex-col"
              >
                <div className="flex-[3] overflow-hidden relative">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="bg-[#E31B23] text-white px-2 py-1 rounded-full text-xs font-medium">
                      Coming Soon
                    </span>
                  </div>
                </div>
                <div className="flex-[1] p-3 md:p-4 flex flex-col justify-between">
                  <h4 className="text-sm md:text-base font-semibold text-gray-400 line-clamp-2">
                    {guide.title}
                  </h4>
                  <button
                    className="text-gray-500 text-xs md:text-sm font-medium flex items-center self-start mt-2 cursor-not-allowed"
                    disabled
                  >
                    Explore
                    <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Buttons (Static or Optional to make dynamic) */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-10 md:mt-12">
          <button className="bg-[#E31B23] hover:bg-[#c5161d] text-white text-sm md:text-base font-medium py-2 px-4 rounded flex items-center justify-center transition-colors duration-300">
            Active Features vs In Development
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button className="bg-transparent hover:bg-[#1A1A1A] text-white text-sm md:text-base border border-[#E31B23] font-medium py-2 px-4 rounded flex items-center justify-center transition-colors duration-300">
            Explore All Resources
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter;
