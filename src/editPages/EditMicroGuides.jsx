import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // your Firebase config
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Plus, Save } from 'lucide-react';

const EditMicroGuides = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Fetches the resource center page content from Firestore.
   * Sets the `data` state to the fetched content if it exists.
   */
/*******  ae443c22-a502-4e88-84f5-cb5eda9887b7  *******/
    const fetchData = async () => {
      const docRef = doc(db, 'pageContent', 'resourceCenter');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
      }
    };
    fetchData();
  }, []);

  const handleInput = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const handleGuideChange = (section, index, key, value) => {
    const updatedSection = [...data[section]];
    updatedSection[index][key] = value;
    setData({ ...data, [section]: updatedSection });
  };

  const addCard = (section) => {
    const newCard = { title: '', image: '' };
    setData({ ...data, [section]: [...data[section], newCard] });
  };

  const saveChanges = async () => {
    const docRef = doc(db, 'pageContent', 'resourceCenter');
    await setDoc(docRef, data);
    alert('Content updated successfully!');
  };

  if (!data) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 text-white bg-[#0D0D0D] min-h-screen">
      <h1 className="text-2xl font-bold mb-6">🛠 Resource Center Admin Panel</h1>

      {/* Editable Fields */}
      <div className="space-y-4 mb-8">
        <label className="block">
          <p className="text-sm mb-1">Heading</p>
          <input
            value={data.heading}
            onChange={(e) => handleInput('heading', e.target.value)}
            className="w-full p-2 rounded bg-[#1A1A1A] border border-gray-700"
          />
        </label>
        <label className="block">
          <p className="text-sm mb-1">Subheading</p>
          <textarea
            value={data.subheading}
            onChange={(e) => handleInput('subheading', e.target.value)}
            rows={2}
            className="w-full p-2 rounded bg-[#1A1A1A] border border-gray-700"
          />
        </label>
        <label className="block">
          <p className="text-sm mb-1">Current Guides Title</p>
          <input
            value={data.currentTitle}
            onChange={(e) => handleInput('currentTitle', e.target.value)}
            className="w-full p-2 rounded bg-[#1A1A1A] border border-gray-700"
          />
        </label>
        <label className="block">
          <p className="text-sm mb-1">Coming Soon Title</p>
          <input
            value={data.comingSoonTitle}
            onChange={(e) => handleInput('comingSoonTitle', e.target.value)}
            className="w-full p-2 rounded bg-[#1A1A1A] border border-gray-700"
          />
        </label>
      </div>

      {/* Editable Cards */}
      <div className="mb-8">
        <h2 className="font-bold text-xl mb-2">📚 Current Guides</h2>
        {data.currentGuides.map((guide, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              value={guide.title}
              onChange={(e) =>
                handleGuideChange('currentGuides', index, 'title', e.target.value)
              }
              placeholder="Title"
              className="p-2 bg-[#1A1A1A] rounded border border-gray-700"
            />
            <input
              value={guide.image}
              onChange={(e) =>
                handleGuideChange('currentGuides', index, 'image', e.target.value)
              }
              placeholder="Image URL"
              className="p-2 bg-[#1A1A1A] rounded border border-gray-700"
            />
          </div>
        ))}
        <button
          onClick={() => addCard('currentGuides')}
          className="text-sm flex items-center gap-1 text-[#E31B23] hover:underline"
        >
          <Plus className="w-4 h-4" /> Add Guide
        </button>
      </div>

      <div className="mb-10">
        <h2 className="font-bold text-xl mb-2">🚀 Upcoming Guides</h2>
        {data.upcomingGuides.map((guide, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              value={guide.title}
              onChange={(e) =>
                handleGuideChange('upcomingGuides', index, 'title', e.target.value)
              }
              placeholder="Title"
              className="p-2 bg-[#1A1A1A] rounded border border-gray-700"
            />
            <input
              value={guide.image}
              onChange={(e) =>
                handleGuideChange('upcomingGuides', index, 'image', e.target.value)
              }
              placeholder="Image URL"
              className="p-2 bg-[#1A1A1A] rounded border border-gray-700"
            />
          </div>
        ))}
        <button
          onClick={() => addCard('upcomingGuides')}
          className="text-sm flex items-center gap-1 text-[#E31B23] hover:underline"
        >
          <Plus className="w-4 h-4" /> Add Coming Soon Guide
        </button>
      </div>

      <button
        onClick={saveChanges}
        className="bg-[#E31B23] hover:bg-[#c5161d] text-white py-2 px-4 rounded flex items-center gap-2 font-medium transition"
      >
        <Save className="w-4 h-4" />
        Save Changes
      </button>
    </div>
  );
};

export default EditMicroGuides;
