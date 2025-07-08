import React from 'react';

function ContactForm() {
  return (
    <section className="contact-block bg-dark-blue py-12 px-6 shadow">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center  rounded-lg shadow p-8">
        
        {/* Left: Get in Touch Text */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="before-border-small text-sm text-white pos-rel">
            Lets Work Together
          </p>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-4 bg-white shadow-md p-10 shadow-lg extra-space-top">

{/* Name Field */}
<div>
  <label htmlFor="name" className="text-left block text-sm font-medium text-gray-700 mb-1">
    Name
  </label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="Your Name"
    className="w-full border border-text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
  />
</div>

{/* Email + Phone in One Row */}
<div className="flex flex-col md:flex-row gap-4">
  {/* Email Field */}
  <div className="w-full md:w-1/2">
    <label htmlFor="email" className="text-left block text-sm font-medium  mb-1">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Your Email"
      className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
    />
  </div>

  {/* Phone Field */}
  <div className="w-full md:w-1/2">
    <label htmlFor="phone" className="text-left block text-sm font-medium  mb-1">
      Phone Number
    </label>
    <input
      type="tel"
      id="phone"
      name="phone"
      placeholder="Your Phone Number"
      className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
    />
  </div>
</div>

{/* Message Field */}
<div>
  <label htmlFor="message" className="text-left block text-sm font-medium  mb-1">
    Message
  </label>
  <textarea
    id="message"
    name="message"
    rows="5"
    placeholder="Your Message"
    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
  ></textarea>
</div>

{/* Submit Button */}
<div class="sub-btn text-left">
  <button
    type="submit"
    className=" form-btn bg-orange text-white text-sm px-6 py-2 rounded  transition"
  >
    Send Message
  </button>
</div>
</form>


      </div>
    </section>
  );
}

export default ContactForm;
