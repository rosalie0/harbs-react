import React from "react";
import reactLogo from "./assets/react.svg";
import Hero from "./components/Hero";
import Footer from "./components/footer/Footer";
import Test from "./components/Test";
import viteLogo from "/vite.svg";
import OurStory from "./components/OurStory";
import Cakes from "./components/cakes/Cakes";
import Locations from "./components/locations/Locations";
import FinalCTA from "./components/finalCallToAction/FinalCTA";
import LocationCarousel from "./components/locations/LocationCarousel";

function App() {
  return (
    <div className="app bg-white">
      <div id="header-placeholder"></div>
      <div className="main">
        <Hero />
        <LocationCarousel />
        <OurStory />
        <Test />
        <Cakes />
        <Locations />
        <FinalCTA />
        <div className="h-20 bg-inherit" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
