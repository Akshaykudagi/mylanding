import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark-blue  py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        
        {/* Left: Menu */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-whit">Home</a>
          <a href="#" className="text-white">Portfolio</a>
          <a href="#" className="text-white">Product</a>
          <a href="#" className="text-white">Contact</a>
        </div>

        {/* Right: Copyright */}
        <div className='text-white'>
          © {new Date().getFullYear()} COPYRIGHT 2020 ALL RIGHT RESERVED.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
