import React from "react";
import { CakeInterface } from "./cakesData";

const CakeCard = ({ cake }: { cake: CakeInterface }) => {
  return (
    <div
      className="flex flex-col items-center 
    bg-white border shadow-md rounded-sm p-4 w-auto md:w-1/4"
    >
      <img src={cake.imageURL} alt="a photograph of the cake" />

      <h4 className="font-semibold font-cormorant-garamond text-3xl text-center">
        {cake.name}
      </h4>
      <h5>Slice: ${cake.slicePrice}.00</h5>
      <h5>Whole: ${cake.wholePrice}.00</h5>
      <p className="max-w-[350px]">{cake.description}</p>
    </div>
  );
};

export default CakeCard;
