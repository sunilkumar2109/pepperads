import React from 'react';
import { Star, TrendingUp, Award, ArrowRight } from 'lucide-react';

const CreatorSpotlight = () => {
  // Mock data for featured creators
  const featuredCreators = [
    {
      name: "Emily Chen",
      brand: "Digital Nomad Daily",
      image: "/api/placeholder/400/400",
      description: "Increased newsletter subscriptions by 127% using PepperAds' gamified surveys.",
      tip: "Use conditional logic to personalize the user journey based on their interests."
    },
    {
      name: "Marcus Johnson",
      brand: "FitTech Solutions",
      image: "/api/placeholder/400/400",
      description: "Generated 50k+ qualified leads through specialized fitness assessment forms.",
      tip: "Incorporate progress bars to reduce form abandonment rates."
    },
    {
      name: "Sophia Williams",
      brand: "EcoStyle",
      image: "/api/placeholder/400/400",
      description: "Increased customer engagement by 85% with interactive product preference surveys.",
      tip: "Use image-based questions to boost completion rates by 40%."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section with Glassmorphism */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-red-600 opacity-10"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
          {/* Glassmorphic Element */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-12 w-full max-w-4xl text-center shadow-2xl">
            <h1 className="text-6xl font-bold mb-4">
              Creator <span className="text-red-600">Spotlight</span>
            </h1>
            <h2 className="text-3xl font-semibold text-red-500 mb-6">
              Success Stories & Strategies
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Monthly highlights of top creators and brands using PepperAds — their stories, growth tips, and unique survey strategies.
            </p>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-600/20 rounded-full backdrop-blur-md"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-red-600/20 rounded-full backdrop-blur-md"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-md"></div>
      </div>

      {/* This Month's Featured Creator */}
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600/20 backdrop-blur-sm px-6 py-2 rounded-full text-red-400 font-semibold mb-6">
            APRIL 2025 SPOTLIGHT
          </div>
          <h2 className="text-5xl font-bold mb-4">Meet This Month's Featured Creator</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how they've leveraged PepperAds to boost engagement and drive results
          </p>
        </div>
        
        {/* Featured Creator Showcase - Glassmorphism Card */}
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 mb-20 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/api/placeholder/500/500" 
                alt="Featured Creator" 
                className="rounded-2xl w-full object-cover shadow-lg border-2 border-red-600/30"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-4xl font-bold mb-2">Alex Rivera</h3>
              <h4 className="text-2xl text-red-500 font-semibold mb-6">Founder, TechTrends Media</h4>
              
              <div className="space-y-6">
                <div className="backdrop-blur-md bg-black/30 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-5 h-5 text-red-500 mr-2" />
                    <h5 className="text-xl font-semibold">Growth Results</h5>
                  </div>
                  <p className="text-gray-300">
                    Generated over 250,000 qualified leads and increased conversion rates by 47% in just 3 months using our premium survey templates.
                  </p>
                </div>
                
                <div className="backdrop-blur-md bg-black/30 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Star className="w-5 h-5 text-red-500 mr-2" />
                    <h5 className="text-xl font-semibold">Success Strategy</h5>
                  </div>
                  <p className="text-gray-300">
                    "We combined PepperAds' gamified surveys with targeted incentives, creating a feedback loop that not only gathered valuable customer insights but also boosted our retention rates significantly."
                  </p>
                </div>
                
                <button className="group flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-800 hover:to-red-700 transition-colors">
                  Read Full Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Spotlights */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Previous Spotlights</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCreators.map((creator, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={creator.image} 
                    alt={creator.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      March 2025
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{creator.name}</h3>
                  <h4 className="text-red-500 font-semibold mb-4">{creator.brand}</h4>
                  <p className="text-gray-300 mb-6">{creator.description}</p>
                  
                  <div className="bg-black/30 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <Award className="w-4 h-4 text-red-500 mr-2" />
                      <span className="text-sm font-semibold">TOP TIP</span>
                    </div>
                    <p className="text-gray-400 text-sm italic">"{creator.tip}"</p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full group flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors">
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Featured Stats - Glassmorphism Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-all">
            <div className="text-5xl font-bold text-red-600 mb-2">178%</div>
            <div className="text-gray-300">Average Growth Rate</div>
          </div>
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-all">
            <div className="text-5xl font-bold text-red-600 mb-2">12M+</div>
            <div className="text-gray-300">Survey Responses</div>
          </div>
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-all">
            <div className="text-5xl font-bold text-red-600 mb-2">43%</div>
            <div className="text-gray-300">Higher Engagement</div>
          </div>
        </div>
        
        {/* Nominate Section */}
        <div className="backdrop-blur-xl bg-gradient-to-r from-red-900/30 to-red-600/30 border border-red-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Nominate a Creator</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Know someone who's achieving amazing results with PepperAds? Nominate them for our next Creator Spotlight feature!
          </p>
          <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
            Submit Nomination
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorSpotlight;