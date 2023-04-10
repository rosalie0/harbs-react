import React from "react";
import CakeCard from "./CakeCard";
import { cakes } from "./cakesData";

const Cakes = () => {
  return (
    <div
      className="py-12
    border-lime-300 border-4
    bg-harbs-yellow-lightest"
    >
      <h3 className="text-5xl uppercase italic font-cormorant-garamond text-center text-harbs-brown-darkest">
        Featured Cakes
      </h3>
      <div className="border-b-2 pt-2 border-harbs-brown-darkest w-64 mx-auto" />

      <div
        className="flex flex-wrap justify-center gap-4
      py-12"
      >
        {cakes.map((cake) => (
          <CakeCard cake={cake} key={cake.name} />
        ))}
      </div>
    </div>
  );
};

export default Cakes;
