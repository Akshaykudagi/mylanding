import bannerImg from '../assets/banner-left.png';
import callIcon from '../assets/call.png';
import notIcon from '../assets/not.png';
import watsupIcon from '../assets/watsup.png';

function Banner() {
  return (
    <section className="Banner banner-form bg-color-pr py-16 px-16 pl-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={bannerImg}
            alt="Banner Visual"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
  Discover your<br />
  Dream Home
</h1>

          <p className="text-sm text-white mb-6">
            Contact us to day for Exclusive listings and expert advise
          </p>
                  <div className="flex  mobile-center items-center gap-4">
                  <div className="shadow rounded-md hover:shadow-md transition  bg-white  social-media-icon-cont items-center gap-4">
                    
                  <div className="flex  items-center gap-4">
            
            {/* Call */}
            <button
  type="button" className="flex  items-center pos-rel brdr-right">
              <img src={callIcon} alt="Call" className="p-2" />
              <span className="text-xs text-gray-600">Call</span>
            </button>

            {/* WhatsApp Call */}
            <button
  type="button" className="flex  items-center pos-rel brdr-right ">
              <img src={watsupIcon} alt="WhatsApp" className="p-2" />
              <span className="text-xs text-gray-600">WhatsApp Call</span>
            </button>

            {/* SMS */}
            <button
  type="button" className="flex  items-center pos-rel">
              <img src={notIcon} alt="SMS" className="p-2" />
              <span className="text-xs text-gray-600 p-2">SMS</span>
            </button>

          </div>
        </div>
          </div>
          <div class="cont-btn flex mobile-center">
          <a
    href="#contact"
    className="border px-6 py-3 rounded-full font-semibold text-center hover:bg-blue-50 transition"
  >
    Contact Us
          </a>
          </div>
                      </div>
         
        </div>
    
    </section>
  );
}

export default Banner;
