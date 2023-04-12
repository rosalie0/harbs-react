import React from "react";
import Carousel from "./Carousel";

const SingleLocation = () => {
  return (
    <div className="flex flex-col ">
      <h2>Chelsea</h2>
      <Carousel />
      <h3>Address: </h3>
      <h3>Business Hours:</h3>

      <div>
        <h4>Monday - Thursday</h4>
        <p>Cake Take-Out: 11:00am - 6:00pm</p>
        <p>Cake & Drinks Dine-In: 11:00am - 5:30pm</p>
        <p>Lunch Unavailable | Drinks close at 5:30pm</p>
      </div>

      <div>
        <h4>Friday - Sunday</h4>
        <p>Cake Take-Out: 11:00am - 8:00pm</p>
        <p>Lunch Dine-In: 11:00am - 3:00pm</p>
        <p>Cake & Drinks Dine-In: 11:00am - 7:30pm</p>
        <p>Lunch Set Unavailable | Drink Take-Out closes at 7:30pm</p>
      </div>
      <h3></h3>
    </div>
  );
};

export default SingleLocation;
