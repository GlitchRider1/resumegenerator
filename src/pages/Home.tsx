import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Create Your Resume with Style
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Build beautiful, job-winning resumes that stand out — fast and free.
          </p>
          <Link to="/builder">
            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow-md transition-all">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Resume Preview */}
        <Link to="/builder" className="flex-1">
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-300">
            <img
              src="https://raw.githubusercontent.com/GlitchRider1/assets/main/resume-preview.png"
              alt="Resume Preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </Link>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-6 mt-12">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-600">Just fill in your info and download — no design skills needed.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
            <p className="text-gray-600">Designed by experts to grab recruiter attention.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Live Preview</h3>
            <p className="text-gray-600">See exactly how your resume will look before downloading.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
