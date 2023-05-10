import React, { useState } from "react";
import SingleLocation from "./SingleLocation";
import { chelseaData, sohoData } from "./locationsData";

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
      {/* Todo: Discuss if this 'section title' should be a component that gets reused? */}
      <h2 className="text-5xl uppercase italic font-cormorant-garamond text-center text-harbs-brown-darkest">
        Locations
      </h2>
      <div className="border-b-2 pt-2 border-harbs-brown-darkest w-64 mx-auto" />
      <div
        className="location-button-container
        p-12
      flex justify-center gap-12"
      >
        <button
          value={"chelsea"}
          onClick={clickHandler}
          className="btn-secondary"
        >
          Chelsea
        </button>
        <button value={"soho"} onClick={clickHandler} className="btn-secondary">
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
