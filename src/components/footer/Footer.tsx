import React from "react";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <div className="bg-white mx-auto px-8 py-16">
      <FooterContent />
      <Copyright />
    </div>
  );
};

export default Footer;
