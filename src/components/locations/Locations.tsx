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

  return (
    <div>
      <SectionHeader title={"Locations"} />
      <div
        className="location-button-container
        p-12
      flex justify-center gap-12"
      >
        <button
          value={"chelsea"}
          onClick={clickHandler}
          className="py-4 w-[200px] rounded-md font-medium text-2xl font-crimson-pro
    bg-harbs-brown text-white shadow-md"
        >
          Chelsea
        </button>
        <button
          value={"soho"}
          onClick={clickHandler}
          className="py-4 w-[200px] rounded-md font-medium text-2xl font-crimson-pro
    bg-harbs-brown text-white shadow-md"
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
