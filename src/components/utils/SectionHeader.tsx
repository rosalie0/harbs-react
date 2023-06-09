import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="py-6">
      <h3 className="text-5xl uppercase italic font-cormorant-garamond text-center text-harbs-brown-darkest">
        {title}
      </h3>
      <div className="border-b-2 pt-2 border-harbs-brown-darkest w-64 mx-auto" />
    </div>
  );
};

export default SectionHeader;
