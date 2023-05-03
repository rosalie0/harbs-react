import React from "react";
import { CakeInterface } from "./cakesData";
import AlcoholText from "./AlcoholText";
import BestSellerBannerOnCard from "./BestSellerBannerOnCard";

const CakeCard = ({ cake }: { cake: CakeInterface }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-sm w-auto md:w-1/4 h-auto font-crimson-pro">
      {cake.isBestSeller && <BestSellerBannerOnCard />}
      <div className="p-4 flex flex-col">
        <img src={cake.imageURL} alt="a photograph of the cake" />
        <h4 className="font-semibold font-cormorant-garamond text-3xl text-center pt-2">
          {cake.name}
        </h4>

        {/* Other styles: */}
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

        <AlcoholText alcoholAmount={cake.alcoholAmount} />
      </div>
    </div>
  );
};

export default CakeCard;
