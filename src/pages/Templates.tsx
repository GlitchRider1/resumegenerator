import React from 'react';
import { useNavigate } from 'react-router-dom';
import ClassicTemplate from '../templates/ClassicTemplate';

const Templates: React.FC = () => {
  const navigate = useNavigate();

  const handleUseTemplate = (template: string) => {
    navigate(`/builder?template=${template}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Choose a Resume Template</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Classic Template Card */}
        <div className="bg-white p-4 rounded shadow text-center">
          <div className="h-64 overflow-auto border rounded bg-gray-50 mb-4 p-3">
            <ClassicTemplate
              name="Your Name"
              job="Web Developer"
              experience="3+ years experience building responsive web applications and user interfaces."
              skills="HTML, CSS, JavaScript, React"
            />
          </div>
          <h3 className="font-semibold text-lg">Classic</h3>
          <p className="text-sm text-gray-500 mb-4">Clean, timeless format for professionals.</p>
          <button
            onClick={() => handleUseTemplate('classic')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Use Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default Templates;
