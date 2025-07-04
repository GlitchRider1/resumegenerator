import React from 'react';
import { Link } from 'react-router-dom';

const Templates: React.FC = () => {
  const templates = [
    {
      id: 'classic',
      name: 'Classic',
      description: 'Clean, timeless format for professionals.',
    },
    {
      id: 'modern',
      name: 'Modern',
      description: 'Stylish design with bold headings and spacing.',
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'For designers and creative roles. Eye-catching layout.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Choose a Resume Template</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center text-gray-400">
                [ Preview ]
              </div>
              <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
              <p className="text-gray-600 text-sm">{template.description}</p>
            </div>
            <Link
              to={`/builder?template=${template.id}`}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg transition"
            >
              Use Template
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
