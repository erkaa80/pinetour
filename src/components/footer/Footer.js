import React from "react";
import "./Footer.css";
import { FooterLogo } from "../../assets";
import { FacebookLogo } from "../../assets";

export const Footer = () => {
  return (
    <div id="footer-container">
      <FooterLogo />
    </div>
  );
};

export const Facebook = () => {
  return (
    <div id="facebook-logo">
      <FacebookLogo />
    </div>
  );
};
