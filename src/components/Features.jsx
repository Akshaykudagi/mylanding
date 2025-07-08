function Features() {
    return (
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Properties for sale</h2>
          <p className="text-gray-600">Search properties for sale</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="sale-info-box bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🚀 Fast Performance</h3>
            <p className="text-gray-600">Our app loads instantly and performs like a rocket.</p>
          </div>
  
          {/* Feature 2 */}
          <div className="sale-info-box bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🔒 Secure & Reliable</h3>
            <p className="text-gray-600">Built with modern security standards and tested reliability.</p>
          </div>
  
          {/* Feature 3 */}
          <div className="sale-info-box bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">⚙️ Easy Integration</h3>
            <p className="text-gray-600">Quick to connect with any existing tools or platforms.</p>
                </div>
                <div className="sale-info-box bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">⚙️ Easy Integration</h3>
            <p className="text-gray-600">Quick to connect with any existing tools or platforms.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Features;
  