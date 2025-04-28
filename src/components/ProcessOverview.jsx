import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase'; // Make sure you are importing firebase config correctly

const ProcessOverview = () => {
  // Default structure for steps
  const defaultSteps = [
    {
      number: "1",
      title: "Type a Prompt",
      description: '"Create a feedback form for food delivery app"',
      subtext: "AI generates form based on industry best practices.",
      image: "https://i.postimg.cc/kXLffmMq/type-Prompt.jpg"
    },
    {
      number: "2",
      title: "Customize It",
      description: "Add/edit questions, logic, upload branding or PDF formats.",
      subtext: "Make it perfect for your needs.",
      image: "https://i.postimg.cc/85WvHj4V/Customize.jpg"
    },
    {
      number: "3",
      title: "Share or Download",
      description: "Get a shareable link, embed it, or turn it into a branded PDF.",
      subtext: "Ready to use in minutes.",
      image: "https://i.postimg.cc/vZJHvXNc/share.jpg"
    }
  ];

  const [steps, setSteps] = useState(defaultSteps); // Default steps
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state for better error handling

  // Fetch data from Firebase on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "pageContent", "process Overview");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setSteps(data.steps); // Update steps with Firebase data
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        setError("Failed to load data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount

  if (loading) {
    return <div>Loading...</div>; // You can replace with a loader animation
  }

  if (error) {
    return <div>{error}</div>; // Error handling message
  }

  return (
    <section id="how-it-works" className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-white mb-3">
          Your Form. Your Way. In <span className="text-[#E31B23]">3 Steps</span>.
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Create professional forms in minutes with our AI-powered form builder.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex-1 max-w-md min-w-[300px]"
            >
              <div className="relative flex flex-col items-center h-full">
                {/* 3D Step number */}
                <div className="w-12 h-12 bg-[#1A1A1A] border-2 border-[#E31B23] rounded-full flex items-center justify-center text-white text-lg font-bold mb-4 z-10">
                  {step.number}
                </div>

                {/* Card */}
                <div className="relative bg-[#1A1A1A] p-4 rounded-lg shadow-lg w-full border border-gray-800 group-hover:border-[#E31B23]/50 transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="mb-3 h-48 bg-gray-900 rounded-lg overflow-hidden">
                    <img
                      src={step.image}
                      alt={`Step ${step.number}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Text section */}
                  <div className="px-2 pb-2">
                    <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-[#E31B23] text-sm font-medium mb-2">{step.description}</p>
                    <p className="text-gray-400 text-xs">{step.subtext}</p>
                  </div>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <>
                  <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-[#E31B23] animate-pulse" />
                  </div>
                  <div className="md:hidden flex justify-center mt-6">
                    <ArrowRight className="h-6 w-6 text-[#E31B23] rotate-90 animate-bounce" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
