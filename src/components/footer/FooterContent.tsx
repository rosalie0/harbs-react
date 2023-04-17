import React from "react";
import {
  AiOutlineFacebook,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

const FooterContent = () => {
  return (
    <div className="py-8 border-t px-4 flex flex-col sm:flex-row justify-around mx-auto">
      <div>
        <h4 className="font-bold text-md border-b">Social Media</h4>
        <div className="py-1 flex gap-4">
          <a href="https://www.instagram.com/harbs1981/" aria-label="Instagram">
            <AiOutlineInstagram size={35} />
          </a>
          <a
            href="https://www.facebook.com/pages/Harbs-Soho/1553774908101878"
            aria-label="Facebook"
          >
            <AiOutlineFacebook size={35} />
          </a>
        </div>
      </div>

      <div className="flex flex-col">
        <h4 className="font-bold border-b text-md">Other sites</h4>
        <a
          className="py-1 text-sm hover:underline"
          href="https://www.harbs.co.jp/"
        >
          HARBS Japan
        </a>
        <a
          className="py-1 text-sm hover:underline"
          href="https://www.harbsnyc.com/"
        >
          HARBS NYC
        </a>
      </div>

      <div className="flex flex-col">
        <h4 className="font-bold border-b text-md">Support</h4>
        <a
          className="py-1 text-sm hover:underline"
          href="https://www.harbs.co.jp/company/contact_page/"
        >
          Contact Us
        </a>
        <a
          className="py-1 text-sm hover:underline"
          href="https://www.harbs.co.jp/company/privacy/"
        >
          Privacy Policy
        </a>
        <a className="py-1 text-sm hover:underline" href="">
          Terms of Service
        </a>
      </div>

      <div className="flex flex-col">
        <h4 className="font-bold border-b text-md">Work with us</h4>
        <a
          className="py-1 text-sm hover:underline"
          href="https://www.harbsnyc.com/hiring/"
        >
          Careers
        </a>
        <a
          className="py-1 text-sm hover:underline"
          href="https://www.harbsnyc.com/hiring/"
        >
          Partnerships
        </a>
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
