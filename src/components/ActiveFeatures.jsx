import React from 'react';
import { FileText, Brain, PenTool, BarChart3, Palette, Users, Rocket } from 'lucide-react';

const ActiveFeatures = () => {
  const currentFeatures = [
    {
      icon: <Brain className="h-8 w-8 text-[#E31B23]" />,
      title: "Build From Scratch",
      description: "Drag-and-drop form builder – clean, fast, no coding."
    },
    {
      icon: <FileText className="h-8 w-8 text-[#E31B23]" />,
      title: "Upload Your Own PDFs",
      description: "Convert and edit survey PDFs directly."
    },
    {
      icon: <PenTool className="h-8 w-8 text-[#E31B23]" />,
      title: "Edit Existing Surveys",
      description: "Real-time updates, collaborative editing, export options."
    }
  ];

  const upcomingFeatures = [
    {
      icon: <Rocket className="h-8 w-8 text-[#E31B23]" />,
      title: "Logic & Branching Rules",
      description: "Set skip logic, scoring, or conditional flows — effortlessly."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#E31B23]" />,
      title: "Response Analytics Dashboard",
      description: "Track responses, see visual insights, and download reports."
    },
    {
      icon: <Palette className="h-8 w-8 text-[#E31B23]" />,
      title: "Custom Branding Tools",
      description: "Add logos, fonts, color themes to forms and PDFs."
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background gradient elements for glassmorphism effect */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-[#E31B23] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#E31B23] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="section-title text-center text-white text-3xl font-bold mb-16">
          What's Working Now vs What's Launching Next
        </h2>
        
        {/* Current Features Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center text-white">
            <span className="text-[#E31B23] mr-2">✓</span> You Can Already Use
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-xl p-6 aspect-square flex flex-col items-center justify-center text-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-[#E31B23] hover:bg-opacity-10 hover:shadow-xl hover:shadow-[#E31B23]/10"
                style={{ backdropFilter: 'blur(10px)' }}
              >
                <div className="p-4 bg-[#E31B23] bg-opacity-10 rounded-full mb-6 transform transition-all duration-300 group-hover:bg-opacity-20">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 hover:text-[#E31B23]">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Upcoming Features Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center text-white">
            <Rocket className="text-[#E31B23] mr-2 h-6 w-6" /> Coming Very Soon
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-xl p-6 aspect-square flex flex-col items-center justify-center text-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-[#E31B23] hover:bg-opacity-10 hover:shadow-xl hover:shadow-[#E31B23]/10"
                style={{ backdropFilter: 'blur(10px)' }}
              >
                <div className="p-4 bg-[#E31B23] bg-opacity-10 rounded-full mb-6 transform transition-all duration-300 group-hover:bg-opacity-20">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 hover:text-[#E31B23]">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveFeatures;
