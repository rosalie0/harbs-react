import React from "react";
import HeroButton from "../HeroButton";

const FinalCTA = () => {
  return (
    <div className="mx-auto flex flex-col items-center p-10 bg-harbs-yellow font-cormorant-garamond text-harbs-brown">
      <h2
        className="max-w-lg mx-auto p-6
      text-2xl text-center "
      >
        Join us today in experiencing the HARBS flavor. Feel 'deliciousness'
        from the bottom of our hearts, to yours.
      </h2>
      <div className="py-4">
        <HeroButton />
      </div>
    </div>
  );
};

export default FinalCTA;
