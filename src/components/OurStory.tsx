import SectionHeader from "./utils/SectionHeader";

const OurStory = () => {
  const infoText =
    "HARBS is a café born in Japan, pursuing freshness and hand-made quality above all else. Ever since we started, our one and only wish has been to make our customers say “DELICIOUS!” from the bottom of their hearts. We hope you savor every moment of joy you experience here at HARBS.";

  return (
    <div className="px-4">
      <SectionHeader title={"Our Story"} />
      <p className="text-center text-lg font-cormorant-garamond mx-auto max-w-4xl text-harbs-brown">
        {infoText}
      </p>
    </div>
  );
};

export default OurStory;
