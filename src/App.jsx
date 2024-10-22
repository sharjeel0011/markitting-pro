


// // 2nd good and best markitting page ready 

import React, { useEffect, useState } from 'react';
import DeliveryTimeMeter from './component/meter';
import 'aos/dist/aos.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from './component/HeroSection';

const MarketingLandingPage = () => {
  const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
};
  useEffect(() => {
    
    AOS.init({ duration: 1000 });

    // Set a timeout to hide the loading screen after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);


    
    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        {/* Loading Screen */}
        <div className="text-center animate__animated animate__fadeIn">
          <h1 className="text-4xl font-bold text-indigo-600">Welcome to MarketingPro</h1>
          <p className="mt-4 text-lg">Loading, please wait...</p>
          {/* You can also add a spinner or animation here */}
          <div className="mt-8">
            <div className="loader"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100  overflow-x-hidden">
    
      <nav className="flex justify-between items-center p-6 bg-white shadow-lg fixed w-full top-0 z-10 animate__animated animate__fadeInDown">
  <div className="text-2xl font-bold text-indigo-600">MarketingPro</div>

  <div className="flex-grow"></div>

  <div className="flex items-center">
    <ul className="flex space-x-8">
      <li><a href="#" className="text-gray-700 hover:text-indigo-600">Home</a></li>
      <li><a href="#" className="text-gray-700 hover:text-indigo-600">Services</a></li>
      <li><a href="#" className="text-gray-700 hover:text-indigo-600">Testimonials</a></li>
      <li><a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a></li>
    </ul>
    <button className="ml-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition transform hover:scale-110 hover:shadow-lg">
      Get a Quote
    </button>
  </div>
</nav>





<nav className="flex justify-between  items-center p-6 bg-white shadow-lg fixed w-full top-0 z-10 animate__animated animate__fadeInDown">
            <div className="text-2xl font-bold text-indigo-600">MarketingPro</div>

            <div className="flex-grow"></div>

            <div className="flex items-center md:hidden">
                <button
                    className="focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="w-8 h-8 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            <div className={`flex-col md:flex md:items-center md:flex-row md:space-x-8 absolute md:relative bg-white w-full md:w-auto top-full left-0 shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0`}>
                <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
                    <li><a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">Home</a></li>
                    <li><a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">Services</a></li>
                    <li><a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">Testimonials</a></li>
                    <li><a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">Contact</a></li>
                </ul>
                <button className="mt-4 md:mt-0 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition transform hover:scale-110 hover:shadow-lg">
                    Get a Quote
                </button>
            </div>
        </nav>







    
      <section
        className="hero-section h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(data:image/jpeg;base64,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)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate__animated animate__fadeInDown">
            Your success is our hand
          </h1>
          <p className="text-2xl mt-4 animate__animated animate__fadeInUp" style={{ animationDelay: '0.5s' }}>
           with colorfull ideas
          </p>
          <button
            className="mt-8 px-8 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition transform hover:scale-110 animate__animated animate__fadeInUp"
            style={{ animationDelay: '1s' }}
          >
            Get Started Today
          </button>
        </div>
      </section>




<section className="py-16 bg-gray-50">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12">Our Recent Work</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div data-aos="zoom-in" className="overflow-hidden rounded-lg shadow-lg">
        <img
          src="imgform.webp"
          alt="Branding Work"
          className="w-full h-full object-cover transition transform hover:scale-105"
        />
      </div>
      <div data-aos="fade-up" className="overflow-hidden rounded-lg shadow-lg" data-aos-delay="200">
        <img
          src="https://cdn.pixabay.com/photo/2024/04/29/04/51/megaphone-8726758_640.png"
          alt="Marketing Campaign"
          className="w-full h-full object-cover transition transform hover:scale-105"
        />
      </div>
      <div data-aos="zoom-in" className="overflow-hidden rounded-lg shadow-lg" data-aos-delay="400">
        <img
          src="https://cdn.pixabay.com/photo/2021/05/24/15/18/smartphone-6279612_1280.jpg"
          alt="Advertising"
          className="w-full h-full object-cover transition transform hover:scale-105"
        />
      </div>
    </div>
  </div>
</section>
     
        


<HeroSection/>

<DeliveryTimeMeter/>











      <div className="bg-white py-12 text-center" data-aos="fade-up">
  <h2 className="text-4xl font-bold text-gray-900 mb-8" data-aos="zoom-in">Our Services</h2>
  <div className="flex flex-wrap justify-center">
    <div className="p-4 w-80" data-aos="slide-right" data-aos-delay="100">
      <div className="bg-blue-500 rounded-lg shadow-lg p-6 transition transform hover:scale-110 hover:rotate-3">
        <h3 className="text-2xl font-bold text-white mb-4">Skincare Treatments</h3>
        <p className="text-white">Experience personalized skincare routines designed for your needs.</p>
      </div>
    </div>
    <div className="p-4 w-80" data-aos="slide-up" data-aos-delay="200">
      <div className="bg-green-500 rounded-lg shadow-lg p-6 transition transform hover:scale-110 hover:skew-y-3">
        <h3 className="text-2xl font-bold text-white mb-4">Haircare Solutions</h3>
        <p className="text-white">Top-rated haircare products for healthy and vibrant hair.</p>
      </div>
    </div>
    <div className="p-4 w-80" data-aos="slide-left" data-aos-delay="300">
      <div className="bg-purple-500 rounded-lg shadow-lg p-6 transition transform hover:scale-110 hover:rotate-6">
        <h3 className="text-2xl font-bold text-white mb-4">Wellness Programs</h3>
        <p className="text-white">Holistic programs tailored to help you feel your best.</p>
      </div>
    </div>
  </div>
</div>








<div className="bg-white py-12 text-center">
  <h2 className="text-4xl font-bold text-gray-900 mb-8" data-aos="fade-up">Our Marketing Services</h2>
  <div className="flex flex-wrap justify-center">
    <div className="p-4 w-80" data-aos="zoom-in" data-aos-delay="100">
      <div className="bg-blue-500 rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-4">Social Media Marketing</h3>
        <p className="text-white">Grow your brand with powerful social media strategies.</p>
      </div>
    </div>
    <div className="p-4 w-80" data-aos="zoom-in" data-aos-delay="200">
      <div className="bg-green-500 rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-4">SEO Optimization</h3>
        <p className="text-white">Boost your visibility on search engines and attract more customers.</p>
      </div>
    </div>
    <div className="p-4 w-80" data-aos="zoom-in" data-aos-delay="300">
      <div className="bg-purple-500 rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-4">Email Marketing</h3>
        <p className="text-white">Deliver personalized email campaigns that convert leads into loyal customers.</p>
      </div>
    </div>
  </div>
</div>





















 
<div className="bg-gray-100 py-12 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
  <h2 className="text-4xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
  <div className="swiper-container">
    <div className="swiper-wrapper">
      <div
        className="swiper-slide bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-anchor-placement="top-bottom"
      >
        <p className="mb-4">"Their marketing services helped us grow our online presence and triple our lead conversions!"</p>
        <span className="block text-gray-600">- John D., CEO at TechCorp</span>
      </div>
      <div
        className="swiper-slide bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        data-aos-anchor-placement="top-bottom"
      >
        <p className="mb-4">"The SEO and social media strategies were a game changer for our business!"</p>
        <span className="block text-gray-600">- Jane R., Marketing Manager at GrowthHub</span>
      </div>

      <div
        className="swiper-slide bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
        data-aos-anchor-placement="top-bottom"
      >
        <p className="mb-4">"Incredible email marketing campaigns that truly converted leads into clients!"</p>
        <span className="block text-gray-600">- Mike S., Founder at StartUpX</span>
      </div>
    </div>
    <div className="swiper-pagination"></div>
  </div>
</div>
 







<div className="bg-white py-16" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Marketing Approach</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-8 bg-blue-500 text-white rounded-lg shadow-lg" data-aos="fade-right" data-aos-delay="100">
        <h3 className="text-2xl font-bold mb-4">Research & Strategy</h3>
        <p>We conduct thorough market research to create data-driven marketing strategies tailored to your audience.</p>
      </div>
      <div className="p-8 bg-green-500 text-white rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-2xl font-bold mb-4">Creative Campaigns</h3>
        <p>Our creative team designs eye-catching campaigns that resonate with your customers and enhance brand visibility.</p>
      </div>
      <div className="p-8 bg-purple-500 text-white rounded-lg shadow-lg" data-aos="fade-left" data-aos-delay="300">
        <h3 className="text-2xl font-bold mb-4">Performance Optimization</h3>
        <p>We continuously analyze and optimize campaigns to maximize your ROI and ensure long-term success.</p>
      </div>
    </div>
  </div>
</div>












<div className="bg-gray-900 py-16 text-white" data-aos="fade-up" data-aos-offset="250" data-aos-duration="1000">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12">Our Growth Metrics</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
        <h3 className="text-3xl font-bold mb-4">
          <span className="counter">500</span>%
        </h3>
        <p>Lead Growth</p>
      </div>
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-3xl font-bold mb-4">
          <span className="counter">300</span>%
        </h3>
        <p>ROI Increase</p>
      </div>
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
        <h3 className="text-3xl font-bold mb-4">
          <span className="counter">250</span>%
        </h3>
        <p>Conversions</p>
      </div>
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
        <h3 className="text-3xl font-bold mb-4">
          <span className="counter">100</span>k
        </h3>
        <p>Happy Clients</p>
      </div>
    </div>
  </div>
</div>









<div className="bg-white py-16" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-8 bg-blue-500 text-white rounded-lg shadow-lg transition transform hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
        <h3 className="text-2xl font-bold mb-4">SEO & Content Marketing</h3>
        <p>Drive organic traffic and improve search rankings with our expert SEO and content strategies.</p>
      </div>
      <div className="p-8 bg-green-500 text-white rounded-lg shadow-lg transition transform hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
        <h3 className="text-2xl font-bold mb-4">Paid Media Advertising</h3>
        <p>Maximize your ad spend with highly targeted campaigns on Google, Facebook, and more.</p>
      </div>
      <div className="p-8 bg-purple-500 text-white rounded-lg shadow-lg transition transform hover:scale-105" data-aos="zoom-in" data-aos-delay="300">
        <h3 className="text-2xl font-bold mb-4">Email Marketing</h3>
        <p>Engage and convert your audience with personalized email marketing campaigns.</p>
      </div>
    </div>
  </div>
</div>










<div className="bg-gray-100 py-16" data-aos="fade-up" data-aos-offset="250" data-aos-duration="1000">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-8 bg-white text-gray-900 rounded-lg shadow-lg" data-aos="fade-right" data-aos-delay="100">
        <img src="data:image/jpeg;base64,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" alt="Team Member" className="w-24 h-24 mx-auto mb-4 rounded-full shadow-lg" />
        <h3 className="text-2xl font-bold mb-2">Sarah T.</h3>
        <p>Chief Marketing Officer</p>
      </div>
      <div className="p-8 bg-white text-gray-900 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
        <img src="https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.webp?b=1&s=612x612&w=0&k=20&c=LxGm3e-hB7jfw2-hp3LE_Yd_gHbYHcgHdZizxIWpw70=" alt="Team Member" className="w-24 h-24 mx-auto mb-4 rounded-full shadow-lg" />
        <h3 className="text-2xl font-bold mb-2">John D.</h3>
        <p>Lead Digital Strategist</p>
      </div>
      <div className="p-8 bg-white text-gray-900 rounded-lg shadow-lg" data-aos="fade-left" data-aos-delay="300">
        <img src="https://media.istockphoto.com/id/1896988382/photo/businessman-contemplating-on-the-office.webp?b=1&s=612x612&w=0&k=20&c=_ziY0MctYk6zl7IA_XHbrCGa2XEtkw926Ej4y1kq_dM=" alt="Team Member" className="w-24 h-24 mx-auto mb-4 rounded-full shadow-lg" />
        <h3 className="text-2xl font-bold mb-2">Emily R.</h3>
        <p>Creative Director</p>
      </div>
    </div>
  </div>
</div>
















<div className="bg-purple-500 py-12 text-center text-white" data-aos="fade-up" data-aos-duration="1000">
  <h2 className="text-4xl font-bold mb-8">Ready to Boost Your Business?</h2>
  <p className="mb-8">Start your journey to marketing success with Marketing Pro.</p>
  <a href="/get-started" className="bg-white text-purple-500 py-3 px-8 rounded-lg font-bold hover:bg-gray-200 transition transform hover:scale-105" data-aos="bounce-in">
    Get Started Now
  </a>
</div>










      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center text-white">
        <p>&copy; 2024 MarketingPro. All Rights Reserved.</p>
      </footer>
    </div>
    



  );
};

export default MarketingLandingPage;



























// import React, { useEffect, useState } from 'react';
// import 'animate.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const MarketingLandingPage = () => {
//   const [loading, setLoading] = useState(true);
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     AOS.init({ duration: 1000 });

//     // Set a timeout to hide the loading screen after 3 seconds
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <div className="text-center animate__animated animate__fadeIn">
//           <h1 className="text-4xl font-bold text-indigo-600">Welcome to MarketingPro</h1>
//           <p className="mt-4 text-lg">Loading, please wait...</p>
//           <div className="mt-8">
//             <div className="loader"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 overflow-x-hidden">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center p-4 md:p-6 bg-white shadow-lg fixed w-full top-0 z-10">
//         <div className="text-xl md:text-2xl font-bold text-indigo-600">MarketingPro</div>

//         <div className="flex-grow"></div>

      
//         <div className="flex items-center md:hidden">
//           <button className="focus:outline-none" onClick={toggleMenu}>
//             <svg className="w-8 h-8 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>

//         <div className={`md:flex md:items-center md:flex-row md:space-x-8 absolute md:relative bg-white w-full md:w-auto top-full left-0 shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0`}>
//           <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
//             <li><a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">Home</a></li>
//             <li><a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">Services</a></li>
//             <li><a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">Testimonials</a></li>
//             <li><a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">Contact</a></li>
//           </ul>
//           <button className="mt-4 md:mt-0 px-4 py-2 text-sm md:text-base bg-indigo-600 text-white rounded hover:bg-indigo-700 transition transform hover:scale-110">
//             Get a Quote
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero-section h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?business,office)' }}>
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="text-center text-white z-10 px-4">
//           <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate__animated animate__fadeInDown">
//             Transform Your Business
//           </h1>
//           <p className="text-xl md:text-2xl mt-4 animate__animated animate__fadeInUp" style={{ animationDelay: '0.5s' }}>
//             With Cutting-Edge Marketing Strategies
//           </p>
//           <button className="mt-8 px-6 py-3 md:px-8 md:py-4 bg-green-500 text-white rounded hover:bg-green-600 transition transform hover:scale-110 animate__animated animate__fadeInUp" style={{ animationDelay: '1s' }}>
//             Get Started Today
//           </button>
//         </div>
//       </section>

//       {/* Our Recent Work */}
//       <section className="py-8 md:py-16 bg-gray-50">
//         <div className="container mx-auto text-center px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Our Recent Work</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
//             <div data-aos="zoom-in" className="overflow-hidden rounded-lg shadow-lg">
//               <img src="imgform.webp" alt="Branding Work" className="w-full h-full object-cover transition transform hover:scale-105" />
//             </div>
//             <div data-aos="fade-up" className="overflow-hidden rounded-lg shadow-lg" data-aos-delay="200">
//               <img src="https://cdn.pixabay.com/photo/2024/04/29/04/51/megaphone-8726758_640.png" alt="Marketing Campaign" className="w-full h-full object-cover transition transform hover:scale-105" />
//             </div>
//             <div data-aos="zoom-in" className="overflow-hidden rounded-lg shadow-lg" data-aos-delay="400">
//               <img src="https://cdn.pixabay.com/photo/2021/05/24/15/18/smartphone-6279612_1280.jpg" alt="Advertising" className="w-full h-full object-cover transition transform hover:scale-105" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="bg-white py-8 md:py-12 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Services</h2>
//         <div className="flex flex-wrap justify-center">
//           <div className="p-4 w-full sm:w-80" data-aos="slide-right" data-aos-delay="100">
//             <div className="bg-blue-500 rounded-lg shadow-lg p-6 transition transform hover:scale-110 hover:rotate-3">
//               <h3 className="text-2xl font-bold text-white mb-4">Skincare Treatments</h3>
//               <p className="text-white">Experience personalized skincare routines designed for your needs.</p>
//             </div>
//           </div>
//           <div className="p-4 w-full sm:w-80" data-aos="slide-up" data-aos-delay="200">
//             <div className="bg-green-500 rounded-lg shadow-lg p-6 transition transform hover:scale-110 hover:skew-y-3">
//               <h3 className="text-2xl font-bold text-white mb-4">Haircare Solutions</h3>
//               <p className="text-white">Top-rated haircare products for healthy and vibrant hair.</p>
//             </div>
//           </div>
//           <div className="p-4 w-full sm:w-80" data-aos="slide-left" data-aos-delay="300">
//             <div className="bg-purple-500 rounded-lg shadow-lg p-6 transition transform hover:scale-110 hover:rotate-6">
//               <h3 className="text-2xl font-bold text-white mb-4">Wellness Programs</h3>
//               <p className="text-white">Holistic programs tailored to help you feel your best.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MarketingLandingPage;
