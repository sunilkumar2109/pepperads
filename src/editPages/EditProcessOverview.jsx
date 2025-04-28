import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const EditProcessOverview = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "pageContent", "process Overview");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading || !data) {
    return <div className="text-white p-4">Loading...</div>;
  }

  const handleChange = (e, index, field) => {
    const updatedSteps = [...data.steps];
    updatedSteps[index][field] = e.target.value;
    setData({ ...data, steps: updatedSteps });
  };

  const handleMainChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const docRef = doc(db, "pageContent", "process Overview");
    await updateDoc(docRef, data);
    alert("Updated successfully!");
    navigate("/edit-process-overview"); // stay on same page
  };

  if (loading) return <div className="text-white p-4">Loading...</div>;

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-2xl font-bold text-red-500 mb-6">
        ✏️ Edit Process Overview
      </h1>

      <div className="mb-6">
        <label className="block mb-1 text-sm">Main Heading</label>
        <input
          name="heading"
          value={data.heading || ""}
          onChange={handleMainChange}
          className="w-full p-2 bg-[#1A1A1A] border border-gray-600 rounded"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 text-sm">Subheading</label>
        <input
          name="subheading"
          value={data.subheading || ""}
          onChange={handleMainChange}
          className="w-full p-2 bg-[#1A1A1A] border border-gray-600 rounded"
        />
      </div>

      {data.steps?.map((step, index) => (
        <div
          key={index}
          className="border border-gray-700 p-4 mb-6 rounded bg-[#111]"
        >
          <h2 className="text-lg font-semibold text-red-400 mb-4">
            Step {index + 1}
          </h2>

          <input
            placeholder="Title"
            value={step.title}
            onChange={(e) => handleChange(e, index, "title")}
            className="w-full p-2 mb-3 bg-[#1A1A1A] border border-gray-600 rounded"
          />

          <input
            placeholder="Description"
            value={step.description}
            onChange={(e) => handleChange(e, index, "description")}
            className="w-full p-2 mb-3 bg-[#1A1A1A] border border-gray-600 rounded"
          />

          <input
            placeholder="Subtext"
            value={step.subtext}
            onChange={(e) => handleChange(e, index, "subtext")}
            className="w-full p-2 mb-3 bg-[#1A1A1A] border border-gray-600 rounded"
          />

          <input
            placeholder="Image URL"
            value={step.image}
            onChange={(e) => handleChange(e, index, "image")}
            className="w-full p-2 mb-3 bg-[#1A1A1A] border border-gray-600 rounded"
          />
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
      >
        💾 Save Changes
      </button>
    </div>
  );
};

export default EditProcessOverview;
