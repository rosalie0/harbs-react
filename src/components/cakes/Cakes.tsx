import React from "react";
import CakeCard from "./CakeCard";
import { cakes } from "./cakesData";
import CakeSectionInfo from "./CakeSectionInfo";

const Cakes = () => {
  return (
    <div
      className="
      flex flex-col items-center py-12
    bg-harbs-yellow-lightest"
    >
      <h3 className="text-5xl uppercase italic font-cormorant-garamond text-center text-harbs-brown-darkest">
        Featured Cakes
      </h3>
      <div className="border-b-2 pt-2 border-harbs-brown-darkest w-64 mx-auto" />

      <CakeSectionInfo />

      <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 py-12">
        {cakes.map((cake) => (
          <CakeCard cake={cake} key={cake.name} />
        ))}
      </div>
    </div>
  );
};

export default Cakes;
