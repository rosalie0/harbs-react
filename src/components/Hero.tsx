import React from "react";
import LemonZesting from "/jpg/lemonZesting.jpeg";
const Hero = () => {
  return (
    <div className="max-w-7xl w-full h-[95svh] lg:h-[85svh] mx-auto bg-yellow-200">
      <div className="px-8 grid lg:grid-cols-3 items-center justify-center">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-7xl">Some kind of heading</h2>
          <p className="text-3xl">
            some kind of subtitle that is a little bit longer
          </p>
          <button className="">Reserve Now</button>
        </div>
        <img
          className="lg:col-span-2 -order-1 lg:order-2 h-[350px] sm:h-[70svh] lg:h-[85svh] mx-auto lg:m-0"
          src={LemonZesting}
        />
        {/* <div className="lg:col-span-2 -order-1 lg:order-2"></div> */}
      </div>
    </div>
  );
};

export default Hero;
