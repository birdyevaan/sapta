import React from "react";
import mission from "../assets/vision.jpg";

const Aboutus = () => {
  return (
    <div className="bg-white">

<div className="lg:w-1/2 lg:h-full relative overflow-hidden md:hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 z-10"></div> {/* Gradient overlay */}
          <img
            src={mission}
            alt="Our Mission"
            className="w-full h-auto lg:h-full object-cover transform transition-transform duration-700 hover:scale-110 hover:rotate-2 lg:rotate-0"
          />
        </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:h-screen">
        
        {/* Text Section */}
        <div className="lg:w-1/2 lg:px-16 px-6 py-8 lg:py-0 lg:h-full flex flex-col justify-center relative z-10">
          <h1 className="text-3xl lg:text-6xl font-extrabold mb-6 font-sans text-left transition-transform duration-500 hover:translate-x-3 lg:text-shadow-lg">
            Our Missi<span className="text-red-500">o</span>n
          </h1>
          <p className="text-lg font-sans lg:text-2xl lg:leading-loose leading-relaxed text-left text-gray-700 lg:max-w-lg transition-opacity duration-500 hover:opacity-90">
            At Sapta Communication, the mission is straightforward: empower businesses through compelling content that resonates with audiences and builds meaningful connections. Digital marketing is viewed as a way to amplify a brand’s voice, ensuring that each strategy not only meets short-term goals but also contributes to long-term success. With a focus on quality communication and creativity, Sapta ensures their clients’ needs are met in a way that drives growth.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="lg:w-1/2 lg:h-full relative overflow-hidden hidden lg:block">
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 z-10"></div> {/* Gradient overlay */}
  <img
    src={mission}
    alt="Our Mission"
    className="w-full h-auto lg:h-full object-cover transform transition-transform duration-700 hover:scale-110 hover:rotate-2 lg:rotate-0"
  />
</div>
      </div>
     
    </div>
  );
};

export default Aboutus;
