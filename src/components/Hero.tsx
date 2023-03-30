import React from "react";
import HeroButton from "./HeroButton";
import LemonZesting from "/jpg/lemonZesting.jpeg";
const Hero = () => {
  return (
    <div className="max-w-7xl w-full h-[100svh] lg:h-[85svh] mx-auto bg-yellow-200">
      <div className="px-8 grid lg:grid-cols-3 items-center justify-center lg:justify-between">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-7xl">Some kind of heading</h2>
          <p className="text-3xl">
            some kind of subtitle that is a little bit longer
          </p>
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
