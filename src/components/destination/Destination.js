import React from "react";
import "./Destination.css";
import { destinations } from "./data";

export const Destination = () => {
  return (
    <div id="destination-container">
      <div id="destination-left-side">
        <div id="subtitle">TOURS | 6 DAYS</div>
        <div id="title">Destination of Our Agency</div>
        <div id="destination-map">
          {destinations.map((destination, index) => (
            <div id="destination-item-container">
              <div id="destination-item-left-side">D{destination.number}</div>
              <div id="destination-item-right-side">
                <div id="destination-item-title">{destination.title}</div>
                <div id="destination-item-location">{destination.location}</div>
              </div>

              {index < destinations.length - 1 && <div id="trip-line"></div>}
            </div>
          ))}
        </div>
      </div>
      <div id="destination-right-side">
        <img src="images/image5.jpg" alt="destination" />
      </div>
    </div>
  );
};
