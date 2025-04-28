import React, { useEffect, useState } from "react";
import { FileText, Download, Upload } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; // adjust path as needed

const PdfDemo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPdfDemo = async () => {
      const docRef = doc(db, "pageContent", "pdfDemo");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      }
    };

    fetchPdfDemo();
  }, []);

  if (!data) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <section className="py-20 px-4 bg-[#1A1A1A]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">{data.heading}</h2>
            <div className="space-y-4 mb-8">
              {data.achievements.map((text, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-[#E31B23]" />
                  <span className="text-gray-300">{text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center">
                <Upload className="mr-2 h-5 w-5" />
                {data.button1Text}
              </button>
              <button className="btn-secondary flex items-center">
                <Download className="mr-2 h-5 w-5" />
                {data.button2Text}
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={data.imageUrl}
              alt="PDF Survey Example"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#E31B23] text-white p-4 rounded-lg">
              <p className="font-semibold">✨ Smart PDFs</p>
              <p className="text-sm">Edit & customize easily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PdfDemo;
