import React from "react";

const CakeCard = ({ cake }) => {
  return (
    <div>
      <h4>{cake.name}</h4>
      <h5>Slice: {cake.slicePrice}</h5>
      <h5>Whole: {cake.wholePrice}</h5>
      <p>{cake.description}</p>
    </div>
  );
};

export default CakeCard;
