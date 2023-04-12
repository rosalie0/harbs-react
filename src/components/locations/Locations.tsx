import React from "react";
import SingleLocation from "./SingleLocation";

const Locations = () => {
  // Chelsea first.
  // Soho second.
  return (
    <div>
      {/* Todo: Discuss if this 'section title' should be a component that gets reused? */}
      <h2 className="text-5xl uppercase italic font-cormorant-garamond text-center text-harbs-brown-darkest">
        Locations
      </h2>
      <div className="border-b-2 pt-2 border-harbs-brown-darkest w-64 mx-auto" />
      <SingleLocation />
      <SingleLocation />
    </div>
  );
};

export default Locations;
