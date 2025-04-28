import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase"; // adjust path if needed
import { useNavigate } from "react-router-dom";

const EditPdfDemo = () => {
  const [formData, setFormData] = useState({
    heading: "",
    achievements: ["", "", ""],
    button1Text: "",
    button2Text: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const docRef = doc(db, "pageContent", "pdfDemo");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data());
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching PDF demo data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const updated = [...formData.achievements];
      updated[index] = value;
      setFormData({ ...formData, achievements: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = async () => {
    try {
      await setDoc(docRef, formData);
      alert("Saved successfully!");
      navigate("/dashboard"); // or wherever you want to redirect
    } catch (err) {
      console.error("Error saving PDF demo data:", err);
    }
  };

  if (loading) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#1A1A1A] text-white rounded-lg shadow-xl mt-10">
      <h2 className="text-2xl font-bold text-red-500 mb-6">📝 Edit PDF Demo Page</h2>

      <div className="space-y-4">
        <label className="block">
          Heading:
          <input
            type="text"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-[#2A2A2A] border border-gray-600"
          />
        </label>

        {formData.achievements.map((item, index) => (
          <label key={index} className="block">
            Achievement {index + 1}:
            <input
              type="text"
              value={item}
              onChange={(e) => handleChange(e, index)}
              className="w-full mt-1 p-2 rounded bg-[#2A2A2A] border border-gray-600"
            />
          </label>
        ))}

        <label className="block">
          Button 1 Text:
          <input
            type="text"
            name="button1Text"
            value={formData.button1Text}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-[#2A2A2A] border border-gray-600"
          />
        </label>

        <label className="block">
          Button 2 Text:
          <input
            type="text"
            name="button2Text"
            value={formData.button2Text}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-[#2A2A2A] border border-gray-600"
          />
        </label>

        <label className="block">
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-[#2A2A2A] border border-gray-600"
          />
        </label>
      </div>

      <button
        onClick={handleSave}
        className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition"
      >
        💾 Save Changes
      </button>
    </div>
  );
};

export default EditPdfDemo;
