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

      <div className="mt-12 max-w-4xl w-full px-4">
  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
    <img
      src="https://via.placeholder.com/800x500.png?text=Your+Resume+Preview"
      alt="Resume Preview"
      className="object-cover w-full h-full"
    />
  </div>
</div>
  );
};

export default Home;
