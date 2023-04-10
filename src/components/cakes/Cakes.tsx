import React from "react";
import CakeCard from "./CakeCard";

const Cakes = () => {
  const mille = {};
  const sCake = {};
  const gtm = {};
  const cakes = [mille, sCake, gtm];

  return (
    <div>
      {cakes.map((cake) => (
        <CakeCard cake={cake} />
      ))}
    </div>
  );
};

export default Cakes;
