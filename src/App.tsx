import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/footer/Footer";
import OurStory from "./components/OurStory";
import Cakes from "./components/cakes/Cakes";
import Locations from "./components/locations/Locations";
import FinalCTA from "./components/finalCallToAction/FinalCTA";

function App() {
  return (
    <div className="app bg-white">
      <div id="header-placeholder"></div>
      <div className="main">
        <Hero />
        <OurStory />
        <Cakes />
        <Locations />
        <FinalCTA />
        {/* below is just a div that acts as space filler / padding. 
        Todo: incorporate this into perhaps, finalCTA. */}
        <div className="h-20 bg-inherit" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
