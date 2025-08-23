import React from "react";

const Hero = () => {
  return (
    <div className="h-[70vh] relative w-full">
      <div className="absolute bg-[url('/sodBridge.jpg')] inset-0 bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative max-w-3xl mx-auto flex flex-col items-center justify-center h-full text-white">
          <h1 className=" text-6xl font-bold text-center mb-5">
            Timeless Fashion for the Modern Wardrobe
          </h1>
          <p className="w-8/12 text-center mb-8">
            Discover timeless fashion for Men, Women, and Kids – crafted for
            comfort, designed for confidence.
          </p>
          <button className="bg-[#ef233c] h-15 rounded-2xl flex items-center justify-center px-10 cursor-pointer hover:opacity-80">
            Explore the collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
