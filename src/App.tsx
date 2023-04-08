import React from "react";
import reactLogo from "./assets/react.svg";
import Hero from "./components/Hero";
import Footer from "./components/footer/Footer";
import Test from "./components/Test";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div className="app bg-white">
      <div id="header-placeholder"></div>
      <div className="main">
        <Hero />
        <Test />
        <div>hello</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
