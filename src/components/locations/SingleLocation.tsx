import React from "react";
import Carousel from "./Carousel";

const SingleLocation = () => {
  return (
    <div className="flex flex-col items-center border border-orange-500 font-crimson-pro text-harbs-brown-darkest">
      <h2 className="text-5xl p-8 uppercase font-cormorant-garamond">
        Chelsea
      </h2>
      <Carousel />
      <h3>
        <span className="font-bold">Address: </span>
        198 9th Ave, New York, NY 10011
      </h3>

      <h3>Business Hours:</h3>
      <div className="border px-5 m-4">
        <h4>Monday - Thursday</h4>
        <p>Cake Take-Out: 11:00am - 6:00pm</p>
        <p>Cake & Drinks Dine-In: 11:00am - 5:30pm</p>
        <p className="italic">Lunch Unavailable | Drinks close at 5:30pm</p>
      </div>

      <div className="border px-5 m-4">
        <h4>Friday - Sunday</h4>
        <p>Cake Take-Out: 11:00am - 8:00pm</p>
        <p>Lunch Dine-In: 11:00am - 3:00pm</p>
        <p>Cake & Drinks Dine-In: 11:00am - 7:30pm</p>
        <p className="italic">
          Lunch Set Unavailable | Drink Take-Out closes at 7:30pm
        </p>
      </div>
      <div className="h-[400px] w-[500px] bg-slate-400">
        Google Maps API Placeholder
      </div>
    </div>
  );
};

export default SingleLocation;
