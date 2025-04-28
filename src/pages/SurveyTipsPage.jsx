import React from 'react';
import { Target, LineChart, Clock, Lightbulb } from 'lucide-react';
import FeatureLayout from '../components/FeatureLayout';
import GlassmorphicCard from '../components/GlassmorphicCard';
import AnimatedSection from '../components/AnimatedSection';

const SurveyTipsPage = () => {
  return (
    <FeatureLayout
      title="Survey Tips"
      subtitle="Create more effective surveys that convert"
      backgroundImage="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg"
    >
      <AnimatedSection className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            Sometimes it's the small changes that drive the biggest results. Learn practical tips 
            for making your surveys shorter, smarter, and more engaging.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassmorphicCard
            icon={<Clock className="w-10 h-10 text-red-500" />}
            title="Optimize Length"
            description="Learn the ideal survey length for maximum completion rates"
          />
          <GlassmorphicCard
            icon={<Target className="w-10 h-10 text-red-500" />}
            title="Question Types"
            description="Choose the right question format for better responses"
          />
          <GlassmorphicCard
            icon={<LineChart className="w-10 h-10 text-red-500" />}
            title="Conversion Tips"
            description="Boost completion rates with proven strategies"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-800">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Pro Tips for Better Results
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Lightbulb className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Keep it Short</h4>
                    <p className="text-gray-300">
                      Shorter surveys have higher completion rates. Aim for 5-7 minutes maximum.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Lightbulb className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Start Easy</h4>
                    <p className="text-gray-300">
                      Begin with simple questions to build momentum and engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Lightbulb className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Mobile First</h4>
                    <p className="text-gray-300">
                      Optimize for mobile users to capture responses on any device.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg"
                alt="Survey Tips" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </FeatureLayout>
  );
};

export default SurveyTipsPage;