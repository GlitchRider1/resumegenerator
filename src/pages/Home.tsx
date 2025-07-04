import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Build Your Resume with Confidence
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Design beautiful, professional resumes in minutes. No design skills required.
        </p>
        <Link to="/builder">
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow-md transition-all">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Simple & Fast</h3>
            <p className="text-gray-600">Fill in your details and get a professional resume instantly.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Modern Templates</h3>
            <p className="text-gray-600">Designed by hiring experts to get you noticed.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Live Preview</h3>
            <p className="text-gray-600">See your resume update in real time as you type.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <ol className="text-left space-y-6 text-gray-700 text-lg">
            <li><strong>Step 1:</strong> Click on "Get Started" to access the builder.</li>
            <li><strong>Step 2:</strong> Fill in your name, experience, skills, and job title.</li>
            <li><strong>Step 3:</strong> Instantly preview and download your resume and cover letter.</li>
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Users Say</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <blockquote className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <p className="italic">“This tool saved me so much time and stress! My resume looks amazing.”</p>
              <p className="mt-4 font-semibold">— Sarah M., Marketing Specialist</p>
            </blockquote>
            <blockquote className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <p className="italic">“I got 3 interviews within a week after using ResumeCraft. Highly recommended.”</p>
              <p className="mt-4 font-semibold">— David L., Software Engineer</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Land Your Dream Job?</h2>
        <p className="mb-6 text-lg">Start building a standout resume today — it's free and easy.</p>
        <Link to="/builder">
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold text-lg px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition">
            Start Building
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
