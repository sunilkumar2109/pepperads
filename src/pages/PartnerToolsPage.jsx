import React from 'react';
import { Users, BarChart3, Zap, Database, ArrowRight } from 'lucide-react';
import FeatureLayout from '../components/FeatureLayout';
import GlassmorphicCard from '../components/GlassmorphicCard';
import AnimatedSection from '../components/AnimatedSection';

const PartnerToolsPage = () => {
  return (
    <FeatureLayout
      title="Partner Tools"
      subtitle="Scale your operations with powerful collaboration features"
      backgroundImage="https://i.postimg.cc/R0DZZdrX/arrangement-yellow-tools-flat-lay-with-copy-space-23-2148393107.jpg"
    >
      <AnimatedSection className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            Built for collaborators, not just creators. Partner Tools is where agencies, creators, 
            and high-volume users can scale their operations. From managing multiple survey campaigns 
            to accessing traffic tools, it's your gateway to growth.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassmorphicCard
            icon={<Users className="w-10 h-10 text-red-500" />}
            title="Team Management"
            description="Collaborate with team members and manage permissions efficiently"
          />
          <GlassmorphicCard
            icon={<BarChart3 className="w-10 h-10 text-red-500" />}
            title="Campaign Analytics"
            description="Track performance across multiple surveys and campaigns"
          />
          <GlassmorphicCard
            icon={<Database className="w-10 h-10 text-red-500" />}
            title="Data Automation"
            description="Automate data collection and processing across campaigns"
          />
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="mb-16">
        <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-800">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Partner Benefits</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-3">Scale Operations</h4>
              <p className="text-gray-400">
                Manage multiple campaigns, teams, and data streams from a centralized dashboard.
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-3">Monetization Tools</h4>
              <p className="text-gray-400">
                Access advanced tools for converting user actions into revenue through trusted networks.
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-3">Data Integration</h4>
              <p className="text-gray-400">
                Connect with popular platforms and automate data syncing for real-time operations.
              </p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-3">Lead Routing</h4>
              <p className="text-gray-400">
                Route leads dynamically based on performance, targeting, and partner availability.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </FeatureLayout>
  );
};

export default PartnerToolsPage;
