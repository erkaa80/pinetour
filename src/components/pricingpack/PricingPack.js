import React from "react";
import "./PricingPack.css";

export const PricingPack = (props) => {
  const { product } = props;
  return (
    <div>
      {product.map((product, index) => (
        <div key={index}>
          <h3>Starter pack</h3>

          <li>Trip</li>
          <li>Hotel</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </div>
      ))}
    </div>
  );
};
