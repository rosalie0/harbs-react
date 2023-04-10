import React from "react";
import { CakeInterface } from "./cakesData";

const CakeCard = ({ cake }: { cake: CakeInterface }) => {
  return (
    <div
      className="flex flex-col items-center 
    bg-white border shadow-md rounded-sm p-4 w-auto md:w-1/4"
    >
      <img src={cake.imageURL} alt="a photograph of the cake" />

      <h4>{cake.name}</h4>
      <h5>Slice: {cake.slicePrice}</h5>
      <h5>Whole: {cake.wholePrice}</h5>
      <p>{cake.description}</p>
    </div>
  );
};

export default CakeCard;
