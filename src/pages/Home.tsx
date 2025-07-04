// File: src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">Welcome to ResumeCraft</h1>
      <p className="text-lg text-gray-700 mb-8">
        Create stunning, professional resumes and cover letters in just a few minutes.
        No design skills needed.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/builder"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded text-lg"
        >
          Get Started
        </Link>
        <Link
          to="/templates"
          className="bg-gray-100 hover:bg-gray-200 text-blue-700 border border-blue-600 py-3 px-6 rounded text-lg"
        >
          Browse Templates
        </Link>
      </div>

      <div className="mt-12 text-gray-500 text-sm">
        💡 Tip: Start with our resume builder, then export as PDF instantly!
      </div>
    </div>
  );
};

export default Home;
