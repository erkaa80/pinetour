import React from "react";
import "./Pricing.css";

export const Pricing = () => {
  return (
    <div id="pricing-container">
      <div id="subtitle">PRICING</div>
      <div id="title" style={{ width: "300px" }}>
        Pricing of Our Agency
      </div>
      <div id="pricing-cards">
        <div className="card">
          <span className="card-title">Starter Pack</span>

          <ul>
            <li>Trip</li>
            <li>Hotel</li>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
          </ul>

          <span className="card-price">2100$</span>
        </div>
        <div className="card">
          <span className="card-title">Luxury Pack</span>

          <ul>
            <li>Starter Pack</li>
            <li>Flights</li>
            <li>Cruise Trips</li>
            <li>Unlimited Food</li>
          </ul>

          <span className="card-price">4200$</span>
        </div>
      </div>
    </div>
  );
};
