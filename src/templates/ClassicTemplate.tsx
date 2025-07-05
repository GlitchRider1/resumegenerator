import React from 'react';

interface ClassicTemplateProps {
  name: string;
  job: string;
  skills: string;
  experience: string;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ name, job, skills, experience }) => {
  return (
    <div className="border p-4">
      <p className="text-green-600">ClassicTemplate is rendering</p>
      <div className="bg-white p-6 rounded shadow text-gray-900">
        <h1 className="text-2xl font-bold">{name || 'Your Name'}</h1>
        <p className="text-sm text-gray-500 mb-4">{job || 'Job Title'}</p>

        <div className="mb-4">
          <h2 className="font-semibold mb-1">Experience</h2>
          <p>{experience || 'Your experience goes here.'}</p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">Skills</h2>
          <ul className="list-disc list-inside">
            {skills
              ? skills.split(',').map((skill, i) => <li key={i}>{skill.trim()}</li>)
              : <li>Sample: HTML, CSS, JavaScript</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClassicTemplate;
