import React, { useState } from "react";
import SingleLocation from "./SingleLocation";

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState("chelsea");
  // Chelsea first.
  // Soho second.
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
          className="py-4 w-[200px] rounded-md font-medium text-2xl font-crimson-pro
    bg-harbs-brown text-white shadow-md"
        >
          Chelsea
        </button>
        <button
          className="py-4 w-[200px] rounded-md font-medium text-2xl font-crimson-pro
    bg-harbs-brown text-white shadow-md"
        >
          Soho
        </button>
      </div>
      {/* Show Chelsea Component if selected location is chelsea */}
      {selectedLocation === "chelsea" && <SingleLocation />}
      {/* Show Soho Component if selected location is chelsea */}
      {selectedLocation === "soho" && <SingleLocation />}{" "}
    </div>
  );
};

export default Locations;
