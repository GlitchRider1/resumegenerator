import React from 'react';
import { useNavigate } from 'react-router-dom';
import ClassicTemplate from '../templates/ClassicTemplate';
import ModernTemplate from '../templates/ModernTemplate';
import CreativeTemplate from '../templates/CreativeTemplate';

const Templates: React.FC = () => {
  const navigate = useNavigate();

  const templates = [
    {
      id: 'classic',
      name: 'Classic',
      description: 'Clean, timeless format for professionals.',
      component: <ClassicTemplate name="Your Name" job="Job Title" experience="Experience details" skills="HTML, CSS, JavaScript" />
    },
    {
      id: 'modern',
      name: 'Modern',
      description: 'Sleek and modern layout for tech-savvy applicants.',
      component: <ModernTemplate name="Your Name" job="Job Title" experience="Experience details" skills="React, Tailwind, Node.js" />
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Stylish and colorful layout for creative fields.',
      component: <CreativeTemplate name="Your Name" job="Job Title" experience="Experience details" skills="Photoshop, Illustrator, Figma" />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10">Choose a Resume Template</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div key={template.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <div className="h-64 overflow-auto border mb-4 p-2 bg-gray-50 rounded">
              {template.component}
            </div>
            <h3 className="text-xl font-semibold">{template.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{template.description}</p>
            <button
              onClick={() => navigate(`/builder?template=${template.id}`)}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Use Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
