import React from 'react';
import { DollarSign, Rocket, Target, BarChart3, ArrowRight } from 'lucide-react';
import FeatureLayout from '../components/FeatureLayout';
import GlassmorphicCard from '../components/GlassmorphicCard';
import AnimatedSection from '../components/AnimatedSection';

const SurveyRevenuePage = () => {
  return (
    <FeatureLayout
      title="Grow with Survey Revenue"
      subtitle="Turn your surveys into a profitable revenue stream"
      backgroundImage="https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg"
    >
      <AnimatedSection className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            Transform your form traffic into earnings. Perfect for creators, app developers, and publishers 
            looking to monetize their audience through surveys, quizzes, and lead generation forms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassmorphicCard
            icon={<DollarSign className="w-10 h-10 text-red-500" />}
            title="Revenue Streams"
            description="Multiple ways to monetize your survey traffic"
            number="01"
          />
          <GlassmorphicCard
            icon={<Target className="w-10 h-10 text-red-500" />}
            title="Targeted Funnels"
            description="Create high-converting survey journeys"
            number="02"
          />
          <GlassmorphicCard
            icon={<BarChart3 className="w-10 h-10 text-red-500" />}
            title="Performance Tracking"
            description="Monitor and optimize your earnings"
            number="03"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-800">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Revenue Opportunities</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
              <div className="relative bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 group-hover:border-red-900 transition-all duration-300">
                <h4 className="text-xl font-semibold text-white mb-3">Feedback Forms</h4>
                <p className="text-gray-300 mb-4">
                  Convert user feedback into valuable market research data and monetize through partner networks.
                </p>
                <div className="flex items-center gap-2 text-red-500">
                  <span className="text-2xl font-bold">$$$</span>
                  <span className="text-sm">High Revenue Potential</span>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
              <div className="relative bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 group-hover:border-red-900 transition-all duration-300">
                <h4 className="text-xl font-semibold text-white mb-3">Lead Generation</h4>
                <p className="text-gray-300 mb-4">
                  Create targeted lead generation surveys that connect with high-paying offer networks.
                </p>
                <div className="flex items-center gap-2 text-red-500">
                  <span className="text-2xl font-bold">$$$$</span>
                  <span className="text-sm">Premium Opportunity</span>
                </div>
              </div>
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
                  Start Earning Today
                </h3>
                <p className="text-gray-300 mb-6">
                  Join successful publishers who are already generating revenue through our 
                  survey monetization platform. Get access to premium campaigns and real-time analytics.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium 
                  transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Apply Now
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-lg font-semibold text-white">Revenue Dashboard</h4>
                    <span className="text-red-500">Live Demo</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Today's Earnings</span>
                      <span className="text-green-400">$342.50</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Active Campaigns</span>
                      <span className="text-white">12</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Conversion Rate</span>
                      <span className="text-white">24.8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </FeatureLayout>
  );
};

export default SurveyRevenuePage;