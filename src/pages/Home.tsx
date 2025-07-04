// File: src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Side Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Build a Stunning Resume Effortlessly
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Create professional, ATS-friendly resumes in minutes — no design skills required.
          </p>
          <Link to="/builder">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow transition-all">
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="https://via.placeholder.com/700x500.png?text=Resume+Preview"
              alt="Resume preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16 px-6 mt-12">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-600">Just fill in your info and download — no setup or learning curve.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Modern Templates</h3>
            <p className="text-gray-600">Choose from beautifully designed resume layouts that impress.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Instant Preview</h3>
            <p className="text-gray-600">See your changes in real time before you download.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
