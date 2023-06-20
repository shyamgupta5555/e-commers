import React from "react";
import "./footer.scss";
import LOGO from "../../images/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="main">
        <div className="cont-a">
          <img src={LOGO} alt="" srcset="" />
        </div>
        <div className="cont-b">
          <ul>
            <li>Condition of Use</li>
            <li>Privarcy Notice</li>
            <li>Interest-Based-Ads</li>
            <li>@ 1996-2022, Amazon.com, Inc. or its affiliates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
