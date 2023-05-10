import React from "react";
import CakeCard from "./CakeCard";
import { cakes } from "./cakesData";
import CakeSectionInfo from "./CakeSectionInfo";
import SectionHeader from "../utils/SectionHeader";

const Cakes = () => {
  return (
    <div
      className="
      flex flex-col items-center py-12
    bg-harbs-yellow-lightest"
    >
      <SectionHeader title={"Featured Cakes"} />
      <CakeSectionInfo />

      <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 py-12">
        {cakes.map((cake) => (
          <CakeCard cake={cake} key={cake.name} />
        ))}
      </div>
    </div>
  );
};

export default Cakes;
