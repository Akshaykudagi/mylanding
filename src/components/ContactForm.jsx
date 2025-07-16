
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Validation logic
  // const validate = () => {
  //   const newErrors = {};
  //   if (!formData.name.trim()) newErrors.name = 'Name is required.';
  //   if (!formData.email.trim()) newErrors.email = 'Email is required.';
  //   else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format.';
  //   if (!formData.message.trim()) newErrors.message = 'Message is required.';
  //   return newErrors;
  // };
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };
  const sendErrorToServer = async (errorDetails) => {
    try {
      const response = await fetch("http://localhost:5000/api/log-error", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "ValidationError",
          message: JSON.stringify(errorDetails, null, 2),
          page: window.location.pathname,
          timestamp: new Date(),
        }),
      });
      
      
      
      
  
      const result = await response.json(); // ✅ Only declare `result` once
  
      if (!result.success) {
        console.error("❌ Backend error:", result);
      } else {
        console.log("✅ Error sent to server");
          window.dispatchEvent(new Event("error-logged"));  // ✅ This is important

        
      }
  
    } catch (err) {
      console.error("❌ Failed to send error to server:", err);
    }
    
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length > 0) {
      console.warn("Validation failed:", validationErrors);
      sendErrorToServer(validationErrors);
      return;
    }
  
    // All validations passed
    setSuccess(true);
    console.log("✅ Form submitted successfully");
    // Continue your actual form submission logic here
  };
  
  
  

  return (
    <section className="bg-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-lg p-8">

        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="before-border-small text-sm text-white relative before:absolute before:content-[''] before:w-12 before:h-1 before:bg-orange-500 before:bottom-0 before:left-0 mb-6">
            Let’s work together on your next big idea.
          </p>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-lg rounded-lg p-8">
          {success && (
            <p className="text-green-600 text-sm font-semibold">Message sent successfully!</p>
          )}

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email + Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="w-full md:w-1/2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}

            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          {/* Submit */}
          <div className="text-left">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-6 py-2 rounded transition"
            >
              Send 
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
