import React from "react";
import Paragraph from "../Tags/Paragraph/Paragraph";

const Footer = () => {
  const FooterLinkTxt = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Locations",
    "Instagram Lite",
    "Threads",
    "Contact Uploading & Non-Users",
    "Meta Verified",
  ];

  return (
    <div className="flex flex-col items-center gap-y-5 ">
      <div className="flex gap-x-2">
        {FooterLinkTxt.map((text, index) => {
          return (
            <a
              key={index}
              href="#"
              target="_blank"
              className="footer-common-txt"
            >
              {" "}
              {text}{" "}
            </a>
          );
        })}
      </div>
      <Paragraph
        text={"© 2024 Instagram from Meta"}
        className={" footer-common-txt"}
      />
    </div>
  );
};

export default Footer;
