import React from "react";
import vision from "../assets/mission.jpg";

const Aboutus = () => {
  return (
    <div className="bg-white">
    
      <div className="flex flex-col lg:flex-row lg:items-center lg:h-screen">
      <div className="lg:w-1/2 lg:h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 z-10"></div> {/* Gradient overlay */}
          <img
            src={vision}
            alt="Our Vision"
            className="w-full h-auto lg:h-full object-cover transform transition-transform duration-700 hover:scale-110 hover:rotate-2 lg:rotate-0"
          />
        </div>
        
        {/* Text Section */}
        <div className="lg:w-1/2 lg:px-16 px-6 py-8 lg:py-0 lg:h-full flex flex-col justify-center relative z-10">
          <h1 className="text-3xl lg:text-6xl font-extrabold mb-6 font-sans text-left transition-transform duration-500 hover:translate-x-3 lg:text-shadow-lg">
            Our Visi<span className="text-red-500">o</span>n
          </h1>
          <p className="text-lg lg:text-2xl  font-sans text-left leading-relaxed text-gray-700 lg:max-w-3xl transition-opacity duration-500 hover:opacity-90 ">
            Creativity & Innovation – Every piece of content is rooted in originality, with fresh ideas that breathe life into a brand and deeply connect with its audience.
            <br /><br />
            Quality Communication – Effective communication is central to everything Sapta does. They work to ensure messages are heard loud and clear, helping brands foster lasting customer relationships.
            <br /><br />
            Client-Centric Approach – Client success is Sapta’s success. Their strategies are designed to meet each business's unique needs, with a focus on growth and reaching specific goals.
            <br /><br />
            Measurable Results – Every effort is aimed at tangible outcomes, from boosting brand awareness to generating leads, with a clear focus on data-driven results.
            <br /><br />
            Adaptability & Growth – The digital world is always evolving, and so is Sapta. Their commitment to staying on top of trends and technologies allows them to offer innovative solutions that keep clients ahead of the curve.
          </p>
        </div>
        
        {/* Image Section */}
        
      </div>
    </div>
  );
};

export default Aboutus;
