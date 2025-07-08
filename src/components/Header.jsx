import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-black-600">
          SLH
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-700 focus:outline-none">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home Page</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Houses for Sale</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Investment Guides</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact Us</a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 px-6">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home Page</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Houses for Sale</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Investment Guides</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Contact Us</a>
        </div>
      )}
    </header>
  );
}

export default Header;
