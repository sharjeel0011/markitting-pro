import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      className="hero-section h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: 'url(data:image/jpeg;base64,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)',
        backgroundAttachment: 'fixed', // Parallax effect
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-70"></div>

      {/* Parallax Elements */}
      <div className="text-center text-white z-10">
        <h1
          className="text-6xl font-bold bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-transparent"
          data-aos="fade-down"
        >
          Transform Your Business
        </h1>
        <p
          className="text-2xl mt-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          With Cutting-Edge Marketing Strategies
        </p>
        <button
          className="mt-8 px-8 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition transform hover:scale-110"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Get Started Today
        </button>
      </div>

      {/* Floating Icons for Interaction (optional) */}
      <div className="absolute left-10 top-10">
        <img
          src="https://example.com/icon-1.png"
          alt="Marketing Icon"
          className="w-16 h-16"
          data-aos="fade-left"
          data-aos-delay="500"
        />
      </div>

      <div className="absolute right-10 bottom-10">
        <img
          src="banner.webp"
          alt="Business Growth Icon"
          className="w-16 h-16"
          data-aos="fade-right"
          data-aos-delay="700"
        />
      </div>
    </section>
  );
};

export default HeroSection;










// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const HeroSection = () => {
//   // Initialize AOS for scroll animations
//   useEffect(() => {
//     AOS.init({ duration: 1200 });
//   }, []);

//   return (
//     <section
//       className="hero-section min-h-screen flex items-center justify-center bg-cover bg-center relative"
//       style={{
//         backgroundImage: 'url()',
//         backgroundAttachment: 'fixed', // Parallax effect
//         backgroundSize: 'cover', // Ensures the image covers the entire section
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-70"></div>

//       {/* Content */}
//       <div className="text-center text-white z-10">
//         <h1
//           className="text-6xl font-bold bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-transparent"
//           data-aos="fade-down"
//         >
//           Transform Your Business
//         </h1>
//         <p className="text-2xl mt-4" data-aos="fade-up" data-aos-delay="300">
//           With Cutting-Edge Marketing Strategies
//         </p>
//         <button
//           className="mt-8 px-8 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition transform hover:scale-110"
//           data-aos="fade-up"
//           data-aos-delay="600"
//         >
//           Get Started Today
//         </button>
//       </div>

//       {/* Floating Icons for Interaction (optional) */}
//       <div className="absolute left-10 top-10">
//         <img
//           src=""
//           alt="Marketing Icon"
//           className="w-16 h-16"
//           data-aos="fade-left"
//           data-aos-delay="500"
//         />
//       </div>

//       <div className="absolute right-10 bottom-10">
//         <img
//           src="banner.webp"
//           alt="Business Growth Icon"
//           className="w-16 h-16"
//           data-aos="fade-right"
//           data-aos-delay="700"
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
