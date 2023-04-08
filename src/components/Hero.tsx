import React from "react";
import HeroButton from "./HeroButton";
import LemonZesting from "/jpg/lemonZesting.jpeg";
const Hero = () => {
  //const topText = 'A Slice of Happiness';
  const topText = "Pure joy in every bite.";
  // "Bringing you exquisite, deliciousness cake.";
  const paragraphText =
    "Handcrafted with only the finest & freshest ingredients, experience HARBS deliciousness today.";
  return (
    <div
      className="max-w-7xl w-full mx-auto 
    bg-harbs-yellow"
    >
      <div
        className="px-2 sm:px-8 lg:px-12
      grid lg:grid-cols-3 items-center 
      justify-center lg:justify-around"
      >
        <div className="px-4 lg:col-span-1 text-harbs-brown">
          <h2 className="font-bold text-5xl md:text-6xl font-cormorant-garamond leading-none md:leading-tight">
            {topText}
          </h2>
          <p className="py-8 text-2xl font-taviraj leading-s">
            {paragraphText}
          </p>
          <HeroButton />
        </div>
        <div className="lg:col-span-2 -order-1 lg:order-2 my-4 mx-auto lg:m-0  flex flex-col lg:items-end">
          <img
            className="w-auto lg:max-h-[85vh] max-h-[500px] sm:max-h-[75vh] object-contain"
            src={LemonZesting}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
