import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <div id="hero-container">
      <h1>Khuvsgul Lake </h1>
      <span id="hero-subtitle">Trip</span>
      <div id="hero-image-container">
        <img src="images/image1.jpg" alt="Nature" />
        <img src="images/image2.jpg" alt="Nature" />
        <img src="images/image3.jpg" alt="Nature" />
        <img src="images/image4.jpg" alt="Nature" />
      </div>
    </div>
  );
};
