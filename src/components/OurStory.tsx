

const OurStory = () => {

    const headText = "Our Story"
    const infoText = "HARBS is a café born in Japan, pursuing freshness and hand-made quality above all else. Ever since we started, our one and only wish has been to make our customers say “DELICIOUS!” from the bottom of their hearts. We hope you savor every moment of joy you experience here at HARBS."

    return (
    <div className="flex flex-wrap items-start flex-col bg-harbs-yellow text-center">
        <div className="mx-10 my-10">
            <h2 className="text-6xl font-bold text-harbs-brown font-cormorant-garamond">{headText}</h2>
        </div>
       <div className="text-center mx-10">
        <p className="text-center text-1xl font-taviraj text-harbs-brown">{infoText}</p>
        </div>
    </div>
    );
  };
  
  export default OurStory;
  