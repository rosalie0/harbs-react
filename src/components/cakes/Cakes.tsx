import React from "react";
import CakeCard from "./CakeCard";
import { cakes } from "./cakesData";

const Cakes = () => {
  return (
    <div>
      {cakes.map((cake) => (
        <CakeCard cake={cake} key={cake.name} />
      ))}
    </div>
  );
};

export default Cakes;
