import React from "react";
import {
  AiOutlineFacebook,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

const FooterContent = () => {
  return (
    <div>
      <div className="flex justify-around">
        <div>
          <h4>Social Media</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/harbs1981/">
              <AiOutlineInstagram size={35} />
            </a>
            <a href="https://www.facebook.com/pages/Harbs-Soho/1553774908101878">
              <AiOutlineFacebook size={35} />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h4>Other sites</h4>
          <a href="https://www.harbs.co.jp/">HARBS Japan</a>
          <a href="https://www.harbsnyc.com/">HARBS NYC</a>
        </div>

        <div className="flex flex-col">
          <h4>Support</h4>
          <a href="https://www.harbs.co.jp/company/contact_page/">Contact Us</a>
          <a href="https://www.harbs.co.jp/company/privacy/">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>

        <div className="flex flex-col">
          <h4>Work with us</h4>
          <a href="https://www.harbsnyc.com/hiring/">Careers</a>
          <a href="https://www.harbsnyc.com/hiring/">Partnerships</a>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
<div>
  <ul>
    <li>
      <a></a>
    </li>
  </ul>
</div>;
