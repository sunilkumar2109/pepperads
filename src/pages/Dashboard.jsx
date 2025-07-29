import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111111] p-6 border-r border-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-red-500">Admin</h2>
        <nav className="space-y-4">
          <Link
            to="/manage-features"
            className="block px-4 py-2 rounded hover:bg-[#2a2a2a] transition"
          >
            📌 Manage Features
          </Link>
          <Link
            to="/edit-process-overview"
            className="block px-4 py-2 rounded hover:bg-[#2a2a2a] transition"
          >
            ✏️ Edit Process Overview
          </Link>
          <Link
            to="/edit-pdf-demo"
            className="block px-4 py-2 rounded hover:bg-[#2a2a2a] transition"
          >
            📄 Edit PDF Demo
          </Link>
          <Link
  to="/edit-ai-promo"
  className="block px-4 py-2 rounded hover:bg-[#2a2a2a] transition"
>
  ✏️ Edit AI Promo Page
</Link>

<Link
  to="/edit-micro-guides"
  className="block px-4 py-2 rounded hover:bg-[#2a2a2a] transition"
>
  📚 Edit Resource Center
</Link>

        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-[#1A1A1A]">
        <h1 className="text-3xl font-bold text-red-500">🛠️ Dashboard</h1>
        <p className="mt-4 text-gray-300">
          Welcome to your admin panel. Use the sidebar to navigate.
        </p>
      </main>
    </div>
  );
};

export default Dashboard;
