import React from "react";
import HeroButton from "./HeroButton";
import LemonZesting from "/jpg/lemonZesting.jpeg";
const Hero = () => {
  //const topText = 'A Slice of Happiness';
  const topText = "Pure joy in every bite.";
  // "Bringing you exquisite, deliciousness cake.";
  const paragraphText =
    "Handcrafted with only the finest and freshest ingredients, indulge in HARBS deliciousness today.";
  return (
    <div
      className="max-w-7xl w-full lg:h-[85svh] mx-auto 
    bg-harbs-yellow"
    >
      <div
        className="px-8 lg:px-12
      grid lg:grid-cols-3 items-center 
      justify-center lg:justify-around"
      >
        <div className="lg:col-span-1 text-harbs-brown">
          <h2
            className="font-bold text-6xl font-cormorant-garamond
          "
          >
            {topText}
          </h2>
          <p className="py-8 text-2xl font-taviraj">{paragraphText}</p>
          <HeroButton />
        </div>
        <div className="lg:col-span-2 -order-1 lg:order-2 my-4 mx-auto lg:m-0 h-full flex flex-col lg:items-end">
          <img
            className="w-auto lg:max-h-[85vh]  max-h-[450px] sm:max-h-[75vh] h-auto object-contain"
            src={LemonZesting}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
