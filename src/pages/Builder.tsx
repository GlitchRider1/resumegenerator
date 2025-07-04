import React, { useState } from 'react';

const Builder: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    job: '',
    skills: '',
    experience: '',
  });

  const [result, setResult] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generate = () => {
    const { name, job, skills, experience } = form;
    setResult(
      `Hi ${name},\n\nResume:\nExperienced ${job} with skills in ${skills}. Background: ${experience}.\n\nCover Letter:\nDear Hiring Manager,\n\nI am excited about the ${job} position. My experience in ${experience} and skills in ${skills} make me a great fit.\n\nSincerely,\n${name}`
    );
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Build Your Resume</h2>

      <div className="bg-white p-6 rounded-xl shadow-md space-y-5">
        <input
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="job"
          placeholder="Job Title"
          onChange={handleChange}
          value={form.job}
        />
        <input
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="skills"
          placeholder="Key Skills (e.g., React, Excel, Leadership)"
          onChange={handleChange}
          value={form.skills}
        />
        <textarea
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="experience"
          placeholder="Work Experience / Background"
          rows={4}
          onChange={handleChange}
          value={form.experience}
        ></textarea>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg"
          onClick={generate}
        >
          Generate Resume
        </button>
      </div>

      {result && (
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-inner whitespace-pre-wrap text-sm text-gray-800">
          {result}
        </div>
      )}
    </div>
  );
};

export default Builder;
