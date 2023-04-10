import React from "react";
import { CakeInterface } from "./cakesData";

const CakeCard = ({ cake }: { cake: CakeInterface }) => {
  return (
    <div
      className="flex flex-col items-center 
    bg-white border"
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
