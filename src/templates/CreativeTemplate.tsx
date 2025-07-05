import React from 'react';

interface Props {
  name: string;
  job: string;
  skills: string;
  experience: string;
}

const CreativeTemplate: React.FC<Props> = ({ name, job, skills, experience }) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg font-mono">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold">{name || 'Your Name'}</h1>
        <p className="text-xl">{job || 'Your Job Title'}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold underline mb-2">Experience</h3>
        <p className="text-sm whitespace-pre-line">{experience || 'Your experience goes here.'}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold underline mb-2">Skills</h3>
        <ul className="list-disc list-inside text-sm">
          {skills
            ? skills.split(',').map((skill, idx) => <li key={idx}>{skill.trim()}</li>)
            : <li>Example: Figma, UI/UX, Branding</li>}
        </ul>
      </div>
    </div>
  );
};

export default CreativeTemplate;
