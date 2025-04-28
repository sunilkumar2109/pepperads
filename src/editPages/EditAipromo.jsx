import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Import Firebase config
import { doc, getDoc, updateDoc } from 'firebase/firestore'; // Firestore methods
import { useNavigate } from 'react-router-dom'; // To navigate back after saving changes

const EditPage = () => {
  const [formData, setFormData] = useState({
    heading: '',
    prompt: '',
    output: '',
    features: ['', '', ''],
    imageUrl: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation after saving changes

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "pageContent", "aiPromo"); // Firestore document reference
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data());
        } else {
          setError('No such document!');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('features')) {
      const index = parseInt(name.split('-')[1], 10);
      const updatedFeatures = [...formData.features];
      updatedFeatures[index] = value;
      setFormData((prev) => ({ ...prev, features: updatedFeatures }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "pageContent", "aiPromo");
      await updateDoc(docRef, formData);
      alert('Changes saved successfully!');
      navigate('/dashboard'); // Navigate back to the dashboard or another page
    } catch (err) {
      setError('Error updating document: ' + err.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-red-500 mb-8">Edit AI Promo Page</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="heading" className="block text-gray-300">Heading</label>
            <input
              type="text"
              id="heading"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
              className="w-full p-3 bg-[#1A1A1A] text-white rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="prompt" className="block text-gray-300">Prompt</label>
            <input
              type="text"
              id="prompt"
              name="prompt"
              value={formData.prompt}
              onChange={handleChange}
              className="w-full p-3 bg-[#1A1A1A] text-white rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="output" className="block text-gray-300">Output</label>
            <input
              type="text"
              id="output"
              name="output"
              value={formData.output}
              onChange={handleChange}
              className="w-full p-3 bg-[#1A1A1A] text-white rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="features-0" className="block text-gray-300">Feature 1</label>
            <input
              type="text"
              id="features-0"
              name="features-0"
              value={formData.features[0]}
              onChange={handleChange}
              className="w-full p-3 bg-[#1A1A1A] text-white rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="features-1" className="block text-gray-300">Feature 2</label>
            <input
              type="text"
              id="features-1"
              name="features-1"
              value={formData.features[1]}
              onChange={handleChange}
              className="w-full p-3 bg-[#1A1A1A] text-white rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="features-2" className="block text-gray-300">Feature 3</label>
            <input
              type="text"
              id="features-2"
              name="features-2"
              value={formData.features[2]}
              onChange={handleChange}
              className="w-full p-3 bg-[#1A1A1A] text-white rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-gray-300">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full p-3 bg-[#1A1A1A] text-white rounded-lg"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-[#E31B23] text-white p-3 rounded-lg"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard')} // Navigate back to dashboard without saving
              className="bg-gray-500 text-white p-3 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditPage;
