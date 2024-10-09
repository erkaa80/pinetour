import React from "react";
import "./Footer.css";
import { FacebookLogo, FooterLogo, InstagramLogo } from "../../assets";

export const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-container">
        <div id="footer-container-left">
          <FooterLogo />
        </div>
        <div id="footer-container-right">
          <div className="footer-container-right-item">
            <FacebookLogo />
          </div>
          <div className="footer-container-right-item">
            <InstagramLogo />
          </div>
        </div>
      </div>
    </div>
  );
};
