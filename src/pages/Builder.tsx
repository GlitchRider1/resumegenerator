// File: src/pages/Builder.tsx
import React, { useState } from 'react';

const Builder: React.FC = () => {
  const [form, setForm] = useState({ name: '', job: '', skills: '', experience: '' });
  const [result, setResult] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generate = () => {
    const { name, job, skills, experience } = form;
    setResult(`Hi ${name},\n\nResume:\nExperienced ${job} with skills in ${skills}. Background: ${experience}.\n\nCover Letter:\nDear Hiring Manager,\n\nI am excited about the ${job} position. My experience in ${experience} and skills in ${skills} make me a great fit.\n\nSincerely,\n${name}`);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Resume Generator</h2>
      <input className="input border rounded w-full px-3 py-2 mb-2" name="name" placeholder="Name" onChange={handleChange} />
      <input className="input border rounded w-full px-3 py-2 mb-2" name="job" placeholder="Job Title" onChange={handleChange} />
      <input className="input border rounded w-full px-3 py-2 mb-2" name="skills" placeholder="Skills" onChange={handleChange} />
      <input className="input border rounded w-full px-3 py-2 mb-2" name="experience" placeholder="Experience" onChange={handleChange} />
      <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4" onClick={generate}>Generate</button>
      {result && (
        <pre className="bg-white mt-4 p-4 rounded shadow whitespace-pre-wrap">{result}</pre>
      )}
    </div>
  );
};

export default Builder;
