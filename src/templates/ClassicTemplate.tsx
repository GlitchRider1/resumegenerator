import React from 'react';

interface ClassicTemplateProps {
  name: string;
  job: string;
  skills: string;
  experience: string;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ name, job, skills, experience }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded shadow text-gray-900">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">{name || 'Your Name'}</h1>
        <p className="text-lg text-gray-600">{job || 'Job Title'}</p>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Experience</h2>
        <p>{experience || 'Your work experience will appear here.'}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          {skills
            ? skills.split(',').map((skill, index) => (
                <li key={index}>{skill.trim()}</li>
              ))
            : <li>Example: Communication, Leadership, React</li>}
        </ul>
      </section>
    </div>
  );
};

export default ClassicTemplate;
