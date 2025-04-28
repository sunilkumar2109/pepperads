import React from 'react';

const FeaturesExamples = () => {
  const examples = [
    {
      title: "Customer Satisfaction Survey",
      description: "A comprehensive survey used by a major retail chain to gather customer feedback across 200+ locations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Healthcare Intake Form",
      description: "HIPAA-compliant intake form used by medical practices to streamline patient onboarding.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Event Registration System",
      description: "Multi-page form with conditional logic used for large conference registrations.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="examples" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">What We've Already Helped Build</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4 mb-12">
          See real examples of how our customers are using our platform to create engaging forms and surveys.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-[#1A1A1A] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <img 
                src={example.image} 
                alt={example.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                <p className="text-gray-400">{example.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesExamples;