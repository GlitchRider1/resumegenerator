import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const linkStyle = (path: string) =>
    `px-4 py-2 rounded-md text-sm font-medium text-center ${
      isActive(path)
        ? 'bg-blue-100 text-blue-700'
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 grid gap-3 sm:flex sm:items-center sm:justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700 text-center sm:text-left">
          <Link to="/">ResumeCraft</Link>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4 justify-center sm:justify-end">
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
