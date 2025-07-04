import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const linkStyle = (path: string) =>
    `py-1.5 px-3 rounded-md text-sm font-medium transition ${
      isActive(path)
        ? 'bg-blue-100 text-blue-700'
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <Link to="/" className="text-2xl font-bold text-blue-700 text-center sm:text-left">
            ResumeCraft
          </Link>
          <div className="flex flex-wrap justify-center sm:justify-end gap-2">
            <Link to="/" className={linkStyle('/')}>Home</Link>
            <Link to="/builder" className={linkStyle('/builder')}>Builder</Link>
            <Link to="/templates" className={linkStyle('/templates')}>Templates</Link>
            <Link to="/about" className={linkStyle('/about')}>About</Link>
            <Link to="/contact" className={linkStyle('/contact')}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
