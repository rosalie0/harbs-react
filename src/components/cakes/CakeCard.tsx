import React from "react";
import { CakeInterface } from "./cakesData";

const CakeCard = ({ cake }: { cake: CakeInterface }) => {
  const width = cake.isBestSeller ? "md:w-1/3" : "md:w-1/4";

  const normalClassnames =
    "flex flex-col items-center bg-white border shadow-md rounded-sm w-auto md:w-1/4 ";

  const larger =
    "flex flex-col items-center bg-white border shadow-md rounded-sm w-auto md:w-1/3";
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-sm w-auto md:w-1/4 h-auto">
      {cake.isBestSeller && (
        <div className="uppercase text-center h-10 w-full pt-2 bg-harbs-yellow text-harbs-brown">
          <p>best seller</p>
        </div>
      )}
      <div>
        <div className="p-4">
          <img src={cake.imageURL} alt="a photograph of the cake" />
          <h4 className="font-semibold font-cormorant-garamond text-3xl text-center">
            {cake.name}
          </h4>
          <h5>Slice: ${cake.slicePrice}.00</h5>
          <h5>Whole: ${cake.wholePrice}.00</h5>
          <p className="max-w-[350px]">{cake.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
