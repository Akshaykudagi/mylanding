import React from 'react';
import aboutImg from '../assets/aboutme.png'; // Replace with your actual image

function AboutMe() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="image-text">
          <img
            src={aboutImg}
            alt="About Me"
            className="profileimg"
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center ">
                  Invest and relax, we work for your dream come true
  </p>
        </div>

        {/* Right Side - Text */}
        <div class="right-img-cont text-left">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
                  <h4 className="text-1xl  text-gray-800 mb-4">I have been working in real estate markets since 1987</h4>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            I am a passionate real estate consultant helping people find their dream homes and profitable investments.
            With over 5 years of experience in the industry, I specialize in residential sales, property evaluation, and 
            customer-focused service.
          </p>
          <h3 className="text-xl font-semibold">Phylis Tan</h3>
  <p className="text-xs text-gray-500 mb-4">ASSOCIATE DIVISION DIRECTOR</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
