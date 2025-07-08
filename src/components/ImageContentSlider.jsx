import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import slide1 from '../assets/slider-two-col.png';
import slide2 from '../assets/slider-two-col.png';

const slides = [
  {
    id: 1,
    image: slide1,
    heading: 'Client Testimony',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, mattis congue mauris, lobortis nullam dolor. Fames ac praesent massa, integer blandit duis. Fermentum. Eget neque, mattis congue mauris, lobortis nullam dolor. Fames ac praesent massa, integer blandit duis. Fermentum.',
  },
  {
    id: 2,
    image: slide2,
    heading: 'Client Testinomy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, mattis congue mauris, lobortis nullam dolor. Fames ac praesent massa, integer blandit duis. Fermentum. Eget neque, mattis congue mauris, lobortis nullam dolor. Fames ac praesent massa, integer blandit duis. Fermentum',
  },
];

function ImageContentSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy(); // Reset before re-init
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="pb-15 pt-15 py-10">
      <div className="max-w-6xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance} // Set swiper instance for useEffect
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 bg-white rounded-lg shadow p-6">
                {/* Left: Image */}
                <div class="slider-img">
                  <img
                    src={slide.image}
                    alt={slide.heading}
                    className="slider-profile-img w-full h-auto rounded-lg"
                  />
                </div>

                {/* Right: Content */}
                <div class="right-cont-2">
                  <h2 className="text-4xl font-bold text-gray-800 mb-3 text-left">{slide.heading}</h2>
                  <p className="text-gray-500 text-xs text-left  mb-3">{slide.description}</p>
                  <div class="text-left gap-2">
  <div class="text-md text-black font-medium">
    Client Name
  </div>
  <div class=" text-xs text-gray-500 ">
  872 Douglas Pass
  </div>
</div>

                </div>
                  </div>
                  
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows Positioned Bottom-Right */}
       {/* Custom Arrows Positioned Bottom-Right */}
<div className="absolute bottom-4 right-10 flex gap-3 z-10">
  <button
    ref={prevRef}
    className="bg-orange text-white text-lg px-4 py-2 rounded hover:bg-gray-800 transition"
  >
    &lt;
  </button>
  <button
    ref={nextRef}
    className="bg-orange text-white text-lg px-4 py-2 rounded hover:bg-gray-800 transition"
  >
    &gt;
  </button>
</div>

      </div>
    </section>
  );
}

export default ImageContentSlider;
