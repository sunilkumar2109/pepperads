import React from 'react';
import { CheckCircle2, Smartphone, BarChart, Shield, ArrowRight } from 'lucide-react';
import FeatureLayout from '../components/FeatureLayout';
import GlassmorphicCard from '../components/GlassmorphicCard';
import AnimatedSection from '../components/AnimatedSection';

const BestPracticesPage = () => {
  return (
    <FeatureLayout
      title="Best Practices"
      subtitle="Industry-proven strategies for survey success"
      backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    >
      <AnimatedSection className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            Learn from hundreds of successful surveys across different industries. Whether you're in HR, 
            education, events, or running monetized campaigns, these best practices will help you create 
            more effective surveys.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassmorphicCard
            icon={<Smartphone className="w-10 h-10 text-red-500" />}
            title="Mobile-First Design"
            description="Optimize your surveys for the best mobile experience"
            number="01"
          />
          <GlassmorphicCard
            icon={<Shield className="w-10 h-10 text-red-500" />}
            title="Accessibility"
            description="Make your surveys accessible to all users"
            number="02"
          />
          <GlassmorphicCard
            icon={<BarChart className="w-10 h-10 text-red-500" />}
            title="Analytics Ready"
            description="Structure forms for better data analysis"
            number="03"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-800">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Industry-Specific Guidelines</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-red-500" />
                <h4 className="text-xl font-semibold text-white">HR Surveys</h4>
              </div>
              <p className="text-gray-300">
                Best practices for employee feedback, engagement surveys, and performance reviews.
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-red-500" />
                <h4 className="text-xl font-semibold text-white">Education</h4>
              </div>
              <p className="text-gray-300">
                Guidelines for student assessments, course feedback, and academic research surveys.
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-red-500" />
                <h4 className="text-xl font-semibold text-white">Events</h4>
              </div>
              <p className="text-gray-300">
                Tips for event registration, feedback collection, and post-event surveys.
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-red-500" />
                <h4 className="text-xl font-semibold text-white">Monetized Campaigns</h4>
              </div>
              <p className="text-gray-300">
                Strategies for optimizing surveys in revenue-generating campaigns and affiliate programs.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 opacity-20 rounded-2xl blur"></div>
          <div className="relative bg-black/60 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-gray-800">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Get the Complete Guide
                </h3>
                <p className="text-gray-300 mb-6">
                  Download our comprehensive best practices guide with detailed examples, 
                  templates, and industry-specific recommendations.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium 
                  transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg flex items-center gap-2">
                  Download Guide
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Best Practices Guide" 
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </FeatureLayout>
  );
};

export default BestPracticesPage;