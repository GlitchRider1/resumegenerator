// File: src/components/Navbar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md mb-6">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-700">
          ResumeCraft
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            className={isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700'}
          >
            Home
          </Link>
          <Link
            to="/builder"
            className={isActive('/builder') ? 'text-blue-600 font-semibold' : 'text-gray-700'}
          >
            Builder
          </Link>
          <Link
            to="/templates"
            className={isActive('/templates') ? 'text-blue-600 font-semibold' : 'text-gray-700'}
          >
            Templates
          </Link>
          <Link
            to="/about"
            className={isActive('/about') ? 'text-blue-600 font-semibold' : 'text-gray-700'}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={isActive('/contact') ? 'text-blue-600 font-semibold' : 'text-gray-700'}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
