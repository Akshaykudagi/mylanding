import React from 'react';

function PropertyNews() {
  const newsList = [
    {
      id: 1,
      title: 'Government Slashes Home Loan Rates for First-Time Buyers',
      date: 'July 5, 2025',
      desc: 'New subsidy announced for home buyers under affordable housing schemes. Builders expect increased demand.',
    },
    {
      id: 2,
      title: 'Top 5 Locations to Invest in Bangalore in 2025',
      date: 'July 3, 2025',
      desc: 'From Whitefield to Sarjapur, explore top property investment zones for long-term growth.',
    },
    {
      id: 3,
      title: 'Tips for Selling Your Home Faster in a Competitive Market',
      date: 'June 28, 2025',
      desc: 'Simple home staging and online marketing strategies can boost your property’s visibility.',
    },
  ];

  return (
    <section className="bg-dark-blue py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center">Latest Property News</h2>
<p className="text-white py-5 text-sm ">With the ever-evolving landscape of the industry, staying informed about the latest developments is crucial for those looking to make informed decisions regarding their investments</p>
        <div className="box-content box text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newsList.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-black-700 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                  <p className="text-xs text-black mb-1 py-3 small-recrt-before">{item.date}</p>

            </div>
          ))}
                  
              </div>
              {/* Explore More Button */}
<div className="text-center mt-10">
  <a
    href="#"
    className="inline-block bg-black text-white text-sm px-6 py-3 rounded hover:bg-white; color:white; transition"
  >
    Explore More
  </a>

                  {/* Small Text Below Button */}
                  <a
    href="#">
  <p className="text-xs text-white mt-2">
  Try our Ai powered search engine                      </p>
                      </a>
</div>

      </div>
    </section>
  );
}

export default PropertyNews;
