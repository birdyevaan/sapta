import React, { useEffect, useRef } from "react";
import about from "../assets/about.jpg";
import sapta1 from "../assets/sapta1.jpg";

const Aboutus = () => {
  const imageRef = useRef(null); // Create a ref for the image div

  useEffect(() => {
    if (window.innerWidth >= 1024) { // Only apply on desktop (lg and above)
      imageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }); // Removed dependency array

  return (
    <div>
      <div className="flex flex-col">
        <div className="relative" ref={imageRef}> {/* Attach the ref to the image div */}
          {/* Image */}
          <img src={sapta1} alt="About Us" className="w-full h-auto sm:h-full" />

          {/* Text Section */}
          <div className="lg:absolute lg:top-0 lg:left-0 lg:flex lg:flex-col lg:items-start lg:justify-center lg:h-full lg:p-16 p-4 lg:bg-black lg:bg-opacity-50 lg:text-white text-black">
            <h1 className="md:text-7xl text-3xl font-bold mb-3 font-sans text-left lg:ml-0 ml-4 md:drop-shadow-md">
              About <span className="text-red-500">u</span>s
            </h1>
            <p className="md:text-5xl text-xl font-sans text-left lg:ml-0 ml-4 md:drop-shadow-md">
              Sapta Communication was born out of a desire to help businesses thrive in the increasingly complex digital landscape. From the start, the belief was that digital marketing should do more than just enhance visibility—it should drive real engagement and fuel growth. With a focus on creating content that captivates and communicates effectively, Sapta quickly became a leader in forging stronger bonds between brands and their audiences.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="relative flex flex-col sm:flex-row sm:items-center bg-white p-4 lg:p-8 ">
          {/* Desktop Image */}
          <div className="hidden lg:flex sm:w-full bg-white p-6">
            <div className="w-2/3 flex flex-col justify-center align-left">
              <p className="text-4xl font-sans text-gray-800 text-left leading-relaxed px-10 transition-transform duration-300 hover:translate-y-1">
                The name "Sapta" is inspired by the seven core principles that guide everything they do: creativity, quality, strategy, integrity, collaboration, adaptability, and impact. These values have been the foundation of Sapta's success, shaping how they collaborate with clients to elevate brands in today’s fast-moving digital world.
              </p>
            </div>
            {/* Image Section */}
            <div className="w-1/3 pr-4">
              <img 
                src={about} 
                alt="About" 
                className="w-full h-auto object-cover rounded-sm transition-transform duration-300 md:rounded-md" 
                style={{ maxHeight: '600px' }} // Adjust max height as needed
              />
            </div>
          </div>

          {/* Mobile Image with Overlay */}
          <div className="lg:hidden block sm:w-full relative">
            <img src={about} alt="About" className="w-full h-auto object-cover rounded-lg" />
            <div className="absolute top-0 left-0 p-4 text-white bg-black bg-opacity-55 w-full h-full flex flex-col justify-center items-center rounded-lg">
              <p className="md:text-5xl text-center text-lg font-sans py-4 text-white">
                The name "Sapta" is inspired by the seven core principles that guide everything they do: creativity, quality, strategy, integrity, collaboration, adaptability, and impact. These values have been the foundation of Sapta's success, shaping how they collaborate with clients to elevate brands in today’s fast-moving digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>  
  );
};

export default Aboutus;