

      {/* Why Choose Us Section */}
      
      <div ref={(el) => (sectionsRef.current[7] = el)} className="bg-purple-500 rounded-lg shadow-lg p-8 mt-10 w-11/12 md:w-3/4 lg:w-1/2 text-white">
        <h2 className="text-4xl font-bold mb-6">Why CarePlus?</h2>
        <p className="mb-4">We offer the best in beauty and personal care, with unbeatable prices and quality.</p>
        <ul className="list-disc list-inside mb-4">
          <li className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2 animate__animated animate__bounce" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a1 1 0 011 1v5.293l4.146 4.147a1 1 0 11-1.415 1.415L10 10.414l-3.732 3.733a1 1 0 11-1.415-1.415L9 8.293V3a1 1 0 011-1z" />
            </svg>
            Premium Quality Products
          </li>
          <li className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2 animate__animated animate__bounce" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a1 1 0 011 1v5.293l4.146 4.147a1 1 0 11-1.415 1.415L10 10.414l-3.732 3.733a1 1 0 11-1.415-1.415L9 8.293V3a1 1 0 011-1z" />
            </svg>
            Affordable Prices
          </li>
          <li className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2 animate__animated animate__bounce" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a1 1 0 011 1v5.293l4.146 4.147a1 1 0 11-1.415 1.415L10 10.414l-3.732 3.733a1 1 0 11-1.415-1.415L9 8.293V3a1 1 0 011-1z" />
            </svg>
            Expert Recommendations
          </li>
        </ul>
        <button className="mt-4 px-6 py-2 bg-yellow-500 text-gray-900 rounded-lg shadow-md hover:bg-yellow-400 transition transform hover:scale-105">
          Get Started
        </button>
      </div>


{/* Our Services Section */}
<div className="bg-white py-12 text-center">
  <h2 className="text-4xl font-bold text-gray-900 mb-8" data-aos="fade-up">Our Services</h2>
  <div className="flex flex-wrap justify-center">
    <div className="p-4 w-80" data-aos="zoom-in" data-aos-delay="100">
      <div className="bg-blue-500 rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-4">Skincare Treatments</h3>
        <p className="text-white">Experience personalized skincare routines designed for your needs.</p>
      </div>
    </div>
    <div className="p-4 w-80" data-aos="zoom-in" data-aos-delay="200">
      <div className="bg-green-500 rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-4">Haircare Solutions</h3>
        <p className="text-white">Top-rated haircare products for healthy and vibrant hair.</p>
      </div>
    </div>
    <div className="p-4 w-80" data-aos="zoom-in" data-aos-delay="300">
      <div className="bg-purple-500 rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-4">Wellness Programs</h3>
        <p className="text-white">Holistic programs tailored to help you feel your best.</p>
      </div>
    </div>
  </div>
</div>

{/* Testimonials Section */}
<div className="bg-gray-100 py-12 text-center" data-aos="fade-up">
  <h2 className="text-4xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
  <div className="swiper-container">
    <div className="swiper-wrapper">
      <div className="swiper-slide bg-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
        <p className="mb-4">"CarePlus has transformed my skincare routine, and my skin has never looked better!"</p>
        <span className="block text-gray-600">- Sarah A.</span>
      </div>
      <div className="swiper-slide bg-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
        <p className="mb-4">"The haircare solutions are top-notch, and I've seen great results!"</p>
        <span className="block text-gray-600">- Megan L.</span>
      </div>
      <div className="swiper-slide bg-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
        <p className="mb-4">"Amazing wellness programs that helped me find balance in my life."</p>
        <span className="block text-gray-600">- Julia R.</span>
      </div>
    </div>
    {/* Swiper Navigation */}
    <div className="swiper-pagination"></div>
  </div>
</div>

{/* Newsletter Section */}
<div className="bg-purple-500 py-12 text-center text-white" data-aos="fade-up">
  <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
  <p className="mb-4">Stay updated with the latest in beauty and wellness trends.</p>
  <div className="mt-4 flex justify-center">
    <input
      type="email"
      placeholder="Enter your email"
      className="px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none"
    />
    <button className="px-6 py-2 bg-yellow-500 text-gray-900 rounded-r-lg hover:bg-yellow-400 transition transform hover:scale-105">
      Subscribe
    </button>
  </div>
</div>

