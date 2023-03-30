import React from "react";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <div id="footer" className="bg-white  px-8">
      <FooterContent />
      <Copyright />
    </div>
  );
};

export default Footer;
