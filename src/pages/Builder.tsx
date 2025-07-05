import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ClassicTemplate from '../templates/ClassicTemplate';

const Builder: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedTemplate = searchParams.get('template') || 'classic';

  const [form, setForm] = useState({
    name: '',
    job: '',
    skills: '',
    experience: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Resume Builder</h2>
        <input
          className="input mb-3 w-full"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />
        <input
          className="input mb-3 w-full"
          name="job"
          placeholder="Job Title"
          onChange={handleChange}
        />
        <input
          className="input mb-3 w-full"
          name="skills"
          placeholder="Skills (comma separated)"
          onChange={handleChange}
        />
        <textarea
          className="input mb-3 w-full"
          name="experience"
          placeholder="Experience"
          rows={4}
          onChange={handleChange}
        />
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-2 text-center">Live Resume Preview</h3>

        {selectedTemplate === 'classic' && (
          <ClassicTemplate {...form} />
        )}

        {/* Modern and Creative will be added later */}
      </div>
    </div>
  );
};

export default Builder;
