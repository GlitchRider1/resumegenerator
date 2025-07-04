import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const linkStyle = (path: string) =>
    `py-2 px-3 rounded transition ${
      isActive(path)
        ? 'bg-blue-100 text-blue-700 font-semibold'
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white shadow-md mb-6">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          ResumeCraft
        </Link>
        <div className="flex flex-wrap justify-center gap-2">
          <Link to="/" className={linkStyle('/')}>Home</Link>
          <Link to="/builder" className={linkStyle('/builder')}>Builder</Link>
          <Link to="/templates" className={linkStyle('/templates')}>Templates</Link>
          <Link to="/about" className={linkStyle('/about')}>About</Link>
          <Link to="/contact" className={linkStyle('/contact')}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
