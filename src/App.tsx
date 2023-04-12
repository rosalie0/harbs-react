import React from "react";
import reactLogo from "./assets/react.svg";
import Hero from "./components/Hero";
import Footer from "./components/footer/Footer";
import Test from "./components/Test";
import viteLogo from "/vite.svg";

import OurStory from "./components/OurStory";

import Cakes from "./components/cakes/Cakes";
import Locations from "./components/locations/Locations";


function App() {
  return (
    <div className="app bg-white">
      <div id="header-placeholder"></div>
      <div className="main">
        <Hero />
        <OurStory />
        <Test />
        <Cakes />
        <Locations />
      </div>
      <Footer />
    </div>
  );
}

export default App;
