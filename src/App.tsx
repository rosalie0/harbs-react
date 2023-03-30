import React from "react";
import reactLogo from "./assets/react.svg";
import Footer from "./components/footer/Footer";
import Test from "./components/Test";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div className="app">
      <div id="header-placeholder"></div>
      <div className="main">
        <Test />
        <div>hello</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
