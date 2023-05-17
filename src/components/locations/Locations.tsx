import React, { useState } from "react";
import SingleLocation from "./SingleLocation";
import { chelseaData, sohoData } from "./locationsData";
import SectionHeader from "../utils/SectionHeader";

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState("chelsea");

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    /* Have to cast 'as HTMLInputElement' inbetween because
    .value is not guaranteed on any ol' event.target,
    only specific ones such as HTMLInputElement, which is what a button is anyways. */
    const value = (event.target as HTMLInputElement).value;
    setSelectedLocation(value);
  };

  const clickedBtnStyles =
    "py-2 w-[100px] rounded-md font-medium text-xl font-cormorant-garamond bg-harbs-brown text-white shadow-md border-harbs-brown-darkest border-2";
  const unclickedBtnStyles =
    "py-2 w-[100px] rounded-md font-medium text-xl font-cormorant-garamond bg-white text-harbs-brown-darkest shadow-md border-harbs-brown-darkest border-2";

  return (
    <div>
      <SectionHeader title={"Locations"} />
      <div
        className="location-button-container
        p-6
      flex justify-center gap-20"
      >
        <button
          value={"chelsea"}
          onClick={clickHandler}
          className={
            selectedLocation === "chelsea"
              ? clickedBtnStyles
              : unclickedBtnStyles
          }
        >
          Chelsea
        </button>
        <button
          value={"soho"}
          onClick={clickHandler}
          className={
            selectedLocation === "soho" ? clickedBtnStyles : unclickedBtnStyles
          }
        >
          Soho
        </button>
      </div>
      {/* Conditionally render which component based on selectedLocation,
      notice props also change */}
      {selectedLocation === "chelsea" && (
        <SingleLocation location={chelseaData} />
      )}
      {selectedLocation === "soho" && <SingleLocation location={sohoData} />}
    </div>
  );
};

export default Locations;
