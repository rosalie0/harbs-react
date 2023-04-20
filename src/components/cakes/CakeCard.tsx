import React from "react";
import { CakeInterface } from "./cakesData";

const CakeCard = ({ cake }: { cake: CakeInterface }) => {
  const width = cake.isBestSeller ? "md:w-1/3" : "md:w-1/4";

  const normalClassnames =
    "flex flex-col items-center bg-white border shadow-md rounded-sm w-auto md:w-1/4 ";

  const larger =
    "flex flex-col items-center bg-white border shadow-md rounded-sm w-auto md:w-1/3";
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-sm w-auto md:w-1/4 h-auto font-crimson-pro">
      {cake.isBestSeller && (
        <div className="uppercase text-center h-10 w-full pt-2 bg-harbs-yellow text-harbs-brown">
          <p>best seller</p>
        </div>
      )}
      <div>
        <div className="p-4 flex flex-col">
          <img src={cake.imageURL} alt="a photograph of the cake" />
          <h4 className="font-semibold font-cormorant-garamond text-3xl text-center pt-2">
            {cake.name}
          </h4>

          {/* <div className="text-center">
            <h5>Slice | Whole</h5>
            <h5>
              ${cake.slicePrice}.00 | ${cake.wholePrice}.00
            </h5>
          </div> */}

          {/* <div className="self-center">
            <h5>Slice: ${cake.slicePrice}.00</h5>
            <h5>Whole: ${cake.wholePrice}.00</h5>
          </div> */}

          {/* <div className="flex flex-nowrap self-center items-center justify-between w-1/2 px-8 ">
            <div>
              <p>Slice:</p>
              <p>Whole:</p>
            </div>
            <div className="text-right">
              <p>${cake.slicePrice}.00</p>
              <p>${cake.wholePrice}.00</p>
            </div>
          </div> */}

          <div className="self-center">
            <h5>
              ${cake.slicePrice} Slice / ${cake.wholePrice} Whole
            </h5>
          </div>
          <p className="self-center text-center max-w-[320px]">
            {cake.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
