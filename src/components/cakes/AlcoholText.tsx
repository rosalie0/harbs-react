import React from "react";

const AlcoholText = ({ alcoholAmount }: { alcoholAmount: number }) => {
  if (alcoholAmount === 0) return <></>;
  if (alcoholAmount <= 1)
    return (
      <p className="italic opacity-50 text-right">*Contains some alcohol.</p>
    );
  if (alcoholAmount <= 2)
    return (
      <p className="italic opacity-50 text-right">
        *Contains strong alcohol taste.
      </p>
    );

  return <></>;
};

export default AlcoholText;
