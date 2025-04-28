import React from 'react';
import { User, Mail, ExternalLink } from 'lucide-react';

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'Founder & CEO',
      bio: 'Background in automation and affiliate marketing with 10+ years experience in building form-based tech solutions.',
      image: '/api/placeholder/400/400',
    },
    {
      name: 'Jamie Chen',
      role: 'Lead Designer',
      bio: 'Expert in UX/UI with a passion for creating intuitive, conversion-focused designs that drive user engagement.',
      image: '/api/placeholder/400/400',
    },
    {
      name: 'Raj Patel',
      role: 'Head of Development',
      bio: 'Full-stack developer specializing in scalable web applications and monetization strategies for digital products.',
      image: '/api/placeholder/400/400',
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Strategist',
      bio: 'Growth marketing specialist with expertise in audience building and form-based conversion optimization.',
      image: '/api/placeholder/400/400',
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Data Analyst',
      bio: 'Turns complex data into actionable insights, helping our clients maximize the value of their form responses.',
      image: '/api/placeholder/400/400',
    },
    {
      name: 'Leila Ahmadi',
      role: 'Customer Success',
      bio: 'Dedicated to ensuring clients get the most out of our platform through training and strategic guidance.',
      image: '/api/placeholder/400/400',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Sparkling Effect */}
      <div className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black z-0"></div>
        
        {/* Sparkle Elements */}
        <div className="sparkle-container absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="sparkle absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl font-bold mb-2">
            Meet Our <span className="text-red-600">Team</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>
      </div>

      {/* Team Description */}
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
        <p className="text-xl text-gray-300">
          We're a scrappy team of developers, designers, marketers, and data strategists from around the world. Led by founders with experience in automation, affiliate marketing, and form-based tech, our goal is to build a platform that works not just for enterprises, but for solo creators and small teams too.
        </p>
        <p className="text-xl text-gray-300 mt-4">
          Many of us have backgrounds in audience monetization and growth marketing, which gives us unique insight into what forms convert best—both for data collection and revenue.
        </p>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                
                {/* Social Icons that appear on hover */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-red-600 transition-colors">
                    <User className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-red-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <h4 className="text-red-500 font-medium mb-3">{member.role}</h4>
                <p className="text-gray-400">{member.bio}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-800 flex justify-end">
                  <a href="#" className="text-sm text-red-500 flex items-center group/link">
                    <span className="group-hover/link:underline">View Profile</span>
                    <ExternalLink className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join the Team CTA */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals who are passionate about creating exceptional digital experiences.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        .animate-twinkle {
          animation: twinkle 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default MeetTheTeam;