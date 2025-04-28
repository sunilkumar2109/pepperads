import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const ManageFeatures = () => {
  const [currentFeatures, setCurrentFeatures] = useState([]);
  const [upcomingFeatures, setUpcomingFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      const ref = doc(db, "pageContent", "features");
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        console.log("Fetched Data:", data);
        setCurrentFeatures(data.currentFeatures || []);
        setUpcomingFeatures(data["upcoming features"] || []);
      }
      setLoading(false);
    };
    fetchFeatures();
  }, []);

  const handleChange = (section, index, field, value) => {
    if (section === "currentFeatures") {
      const updated = [...currentFeatures];
      updated[index][field] = value;
      setCurrentFeatures(updated);
    } else if (section === "upcomingFeatures") {
      const updated = [...upcomingFeatures];
      updated[index][field] = value;
      setUpcomingFeatures(updated);
    }
  };

  const handleSave = async () => {
    const ref = doc(db, "pageContent", "features");
    await updateDoc(ref, {
      currentFeatures: currentFeatures,
      "upcoming features": upcomingFeatures,
    });
    alert("✅ Features updated!");
  };

  return (
    <div className="text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Current Features</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Current Features Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Current Features</h3>
            {currentFeatures.length > 0 ? (
              currentFeatures.map((feature, index) => (
                <div key={index} className="bg-[#2A2A2A] p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Feature {index + 1}</h4>
                  <input
                    type="text"
                    placeholder="Title"
                    value={feature.title || ""}
                    onChange={(e) =>
                      handleChange("currentFeatures", index, "title", e.target.value)
                    }
                    className="w-full p-2 mb-2 rounded bg-[#1E1E1E] text-white border border-gray-700"
                  />
                  <textarea
                    placeholder="Description"
                    value={feature.description || ""}
                    onChange={(e) =>
                      handleChange("currentFeatures", index, "description", e.target.value)
                    }
                    className="w-full p-2 rounded bg-[#1E1E1E] text-white border border-gray-700"
                  />
                </div>
              ))
            ) : (
              <p>No current features available</p>
            )}
          </div>

          {/* Upcoming Features Section */}
          <div className="space-y-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Features</h3>
            {upcomingFeatures.length > 0 ? (
              upcomingFeatures.map((feature, index) => (
                <div key={index} className="bg-[#2A2A2A] p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Feature {index + 1}</h4>
                  <input
                    type="text"
                    placeholder="Title"
                    value={feature.title || ""}
                    onChange={(e) =>
                      handleChange("upcomingFeatures", index, "title", e.target.value)
                    }
                    className="w-full p-2 mb-2 rounded bg-[#1E1E1E] text-white border border-gray-700"
                  />
                  <textarea
                    placeholder="Description"
                    value={feature.description || ""}
                    onChange={(e) =>
                      handleChange("upcomingFeatures", index, "description", e.target.value)
                    }
                    className="w-full p-2 rounded bg-[#1E1E1E] text-white border border-gray-700"
                  />
                </div>
              ))
            ) : (
              <p>No upcoming features available</p>
            )}
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="bg-red-600 px-6 py-2 rounded hover:bg-red-700 font-semibold mt-4"
          >
            Save Changes
          </button>
        </>
      )}
    </div>
  );
};

export default ManageFeatures;
