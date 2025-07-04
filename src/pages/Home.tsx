// File: src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
        Create a Stunning Resume in Minutes
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-6">
        ResumeCraft helps you build professional, ATS-friendly resumes with ease — no design skills needed.
      </p>
      <Link to="/builder">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-6 rounded-xl shadow transition">
          Get Started Now
        </button>
      </Link>

      <div className="mt-10 w-full max-w-4xl px-4">
  <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
    <img
      src="https://via.placeholder.com/1000x600.png?text=Resume+Preview"
      alt="Resume Preview"
      className="w-full h-auto object-cover"
    />
  </div>
</div>
  );
};

export default Home;
