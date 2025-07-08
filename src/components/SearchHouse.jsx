import { useState } from 'react';
import img01 from '../assets/01.png';
import map01 from '../assets/map-pin.png';
import navigation from '../assets/navigation.png';
import room from '../assets/rooom.png';
import Frame from '../assets/Frame.png';
import area from '../assets/area.png';

function SearchHouse() {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    minPrice: '',
    maxPrice: ''
  });

  const defaultSales = [
    {
      id: 1,
      location: 'Bangalore',
      type: 'Villa',
      price: 8000000,
      image: img01,
    },
    {
      id: 2,
      location: 'Mumbai',
      type: 'Flat',
      price: 5000000,
      image: img01,
    },
    {
      id: 3,
      location: 'Delhi',
      type: 'Farmhouse',
      price: 12000000,
      image: img01,
    },
    {
      id: 4,
      location: 'Bangalore',
      type: 'Flat',
      price: 4000000,
      image: img01,
    },
    {
      id: 5,
      location: 'Mumbai',
      type: 'Villa',
      price: 10000000,
      image: img01,
    },
    {
      id: 6,
      location: 'Delhi',
      type: 'Flat',
      price: 4500000,
      image: img01,
    },
  ];
  
  
  const [results, setResults] = useState(defaultSales);
  
  const handleSearch = () => {
    const allSales = defaultSales;
  
    const filtered = allSales.filter((item) => {
      const matchLocation = !filters.location || item.location === filters.location;
      const matchType = !filters.type || item.type === filters.type;
      const matchMin = !filters.minPrice || item.price >= parseInt(filters.minPrice);
      const matchMax = !filters.maxPrice || item.price <= parseInt(filters.maxPrice);
      return matchLocation && matchType && matchMin && matchMax;
    });
  
    setResults(filtered);
  };
  

  return (
    <section className="bg-white search-tab-block  py-12 px-6 ">
      <div className="max-w-5xl mx-auto text-center mb-5">
              <h2 className="text-3xl font-bold text-gray-800 mb-2"> Properties for Sale</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
              Search properties for sale
  </p>
      </div>

      {/* Filter Inputs */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
        {/* Location */}
        <select
          className="border rounded px-4 py-2 w-full md:w-40"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        >
          <option value=""> Location</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
        </select>

        {/* Property Type */}
        <select
          className="border rounded px-4 py-2 w-full md:w-40"
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">Property Type</option>
          <option value="Flat">Flat</option>
          <option value="Villa">Villa</option>
          <option value="Farmhouse">Farmhouse</option>
        </select>

        {/* Min Price */}
        <input
          type="number"
          placeholder="Min Price"
          className="border rounded px-4 py-2 w-full md:w-40"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
        />

        {/* Max Price */}
        <input
          type="number"
          placeholder="Max Price"
          className="border rounded px-4 py-2 w-full md:w-40"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className=" bg-black text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Search Now
        </button>
      </div>

      {/* Display Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {results.map((item) => (
  <div
  key={item.id}
  className="bg-white shadow-md rounded-lg overflow-hidden p-4 text-left hover:shadow-lg transition"
>
  {/* Property Image */}
  <img
    src={item.image}
    alt={`${item.type} in ${item.location}`}
    className="w-full h-48 object-cover rounded mb-4"
  />

  {/* 🆕 Small Header */}
  <h4 className="text-sm text-gray-800 font-semibold mb-2">
    New Style House with beautiful garden and swimming pool
  </h4>

  {/* Location Row */}
  <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
    <div className="flex items-center gap-2">
      <img src={map01} alt="Location" className="w-4 h-4" />
      <span>{item.location}</span>
    </div>
    {/* <span className="text-blue-600 font-semibold">{item.type}</span> */}
  </div>

  {/* Show on Map */}
  <div className="mb-3 flex items-center gap-2">
    <img
      src={navigation
}
      alt="Show on map"
      className=""
                  />
                    <span className="text-sm ">Show on demo</span>
  
  </div>

  {/* 3 Column Features */}
  <div className="grid justify-between border-bottom
 grid-cols-3 gap-2 text-center text-xs text-gray-600">
    <div className="flex  justify-start items-center">
      <img src={area} alt="Beds" className="w-5 h-5 mb-1 px-1" />
      <span>927 m2</span>
    </div>
    <div className="flex   justify-center items-center">
      <img src={room} alt="Baths" className="w-5 h-5 mb-1 px-1" />
      <span>6 Rooms</span>
    </div>
    <div className="flex  justify-end items-center">
      <img src={Frame} alt="Area" className="w-5 h-5 mb-1 px-1" />
      <span>1 Pool</span>
    </div>
              </div>
              {/* Bottom Row: For Sale, Price, Button */}
<div className="sale-info flex items-center justify-between mt-4">
  {/* Left side: For Sale + Price */}
  <div className="flex flex-col text-sm">
    <span className="text-xs">For Sale</span>
    <span className="color-blue font-bold">$45,000</span>
  </div>

  {/* Right side: View Detail button */}
  <a
    href="#"
    className="bg-blue text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
  >
    View Detail
  </a>
</div>

</div>


))}

          </div>
          {/* See All Listings Button */}
          <div className="text-center mt-10">
  <button
    onClick={() => {
      setResults(defaultSales);  // show all cards again
      setFilters({ location: '', type: '', minPrice: '', maxPrice: '' }); // reset filters
    }}
    className="black-btn inline-block bg-black text-white text-sm px-6 py-3 rounded hover:bg-blue-700 transition"
  >
    See All Listings
  </button>
</div>



    </section>
  );
}

export default SearchHouse;
