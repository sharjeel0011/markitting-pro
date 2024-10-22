import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DeliveryTimeMeter = () => {
  const [inView, setInView] = useState(false);
  const meterRef = useRef(null);

  useEffect(() => {
    AOS.init();
    
    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setInView(true);  // Start counting when the section is in view
        observer.disconnect(); // Disconnect to prevent re-triggering
      }
    }, { threshold: 0.2 }); // 20% of the element is in view

    if (meterRef.current) {
      observer.observe(meterRef.current);
    }

    return () => {
      if (meterRef.current) {
        observer.unobserve(meterRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white py-16" ref={meterRef} data-aos="fade-up" data-aos-duration="1000">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Fast Delivery Promise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          
          {/* Delivery Time Meter */}
          <div className="p-8 bg-blue-500 text-white rounded-lg shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-700 opacity-20"></div>
            <h3 className="text-2xl font-bold z-10 relative">Average Delivery Time</h3>
            
            {/* Circular Meter with CountUp Animation */}
            <div className="relative z-10 flex justify-center items-center mt-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-8 border-blue-200 relative">
                  <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-8 border-blue-500 animate-spin-slow"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-2xl font-bold text-white">
                  {inView && (
                    <CountUp start={0} end={2.5} duration={2.5} decimals={1} />
                  )}
                  <span className="text-sm">Days</span>
                </div>
              </div>
            </div>
            
            <p className="text-white mt-6 z-10 relative">We deliver 90% of our products within 2.5 days!</p>
          </div>

          {/* Fulfillment Rate Meter */}
          <div className="p-8 bg-green-500 text-white rounded-lg shadow-lg relative overflow-hidden" data-aos="fade-right">
            <h3 className="text-2xl font-bold relative z-10">Order Fulfillment Rate</h3>
            <div className="relative z-10 flex justify-center items-center mt-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-8 border-green-200 relative">
                  <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-8 border-green-500 animate-spin-slow"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-2xl font-bold text-white">
                  {inView && (
                    <CountUp start={0} end={98} duration={3} />
                  )}
                  <span className="text-sm">%</span>
                </div>
              </div>
            </div>
            <p className="text-white mt-6 z-10 relative">We have a 98% order fulfillment rate!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryTimeMeter;
