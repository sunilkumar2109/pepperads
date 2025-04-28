import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { db } from '../firebase'; // Import your Firebase config
import { doc, getDoc } from "firebase/firestore"; // Firebase Firestore methods

const AiPromo = () => {
  const [data, setData] = useState(null); // State to hold the data
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from Firestore when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "pageContent", "aiPromo"); // Reference to Firestore document
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means it runs once when the component mounts

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Default data in case Firestore fails (fallback)
  const features = data?.features || [
    "Based on internal database of templates",
    "Tailored to your use case",
    "Fast, accurate, editable"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">
              {data?.heading || "Let AI Build Your Next Survey"} {/* Dynamically rendering the heading */}
            </h2>
            <div className="bg-[#1A1A1A] p-6 rounded-xl mb-8">
              <p className="text-gray-400 mb-4">Prompt:</p>
              <p className="text-lg font-semibold mb-4">
                {data?.prompt || "Create an employee feedback form for remote teams"} {/* Dynamically rendering the prompt */}
              </p>
              <div className="flex items-center">
                <Sparkles className="h-5 w-5 text-[#E31B23] mr-2" />
                <p className="text-sm text-gray-400">
                  Output: {data?.output || "A ready-to-edit, smart form within seconds."} {/* Dynamically rendering the output */}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-[#E31B23]" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src={data?.imageUrl || "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"} // Dynamically loading image URL
              alt="AI Survey Generation" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#E31B23] text-white p-4 rounded-lg">
              <p className="font-semibold">🤖 AI-Powered</p>
              <p className="text-sm">Generate in seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiPromo;
