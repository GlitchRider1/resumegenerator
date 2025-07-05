import React from 'react';

interface Props {
  name: string;
  job: string;
  skills: string;
  experience: string;
}

const ModernTemplate: React.FC<Props> = ({ name, job, skills, experience }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 font-sans">
      <div className="text-center border-b pb-4 mb-4">
        <h1 className="text-3xl font-bold text-blue-700">{name || 'Your Name'}</h1>
        <p className="text-gray-600">{job || 'Job Title'}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Experience</h3>
        <p className="text-sm text-gray-700 whitespace-pre-line">{experience || 'Your experience goes here.'}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {skills ? skills.split(',').map((skill, index) => (
            <li key={index}>{skill.trim()}</li>
          )) : <li>Example: React, TypeScript, Git</li>}
        </ul>
      </div>
    </div>
  );
};

export default ModernTemplate;
