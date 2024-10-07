import React from "react";
import "./Pricing.css";

import { PricingPack } from "../pricingpack";

export const Pricing = () => {
  return (
    <div>
      <h5>Pricing</h5>
      <h1>Pricing of Our Agency</h1>
      <div id="Frame60">
        {PricingPack}
        <button></button>
      </div>
    </div>
  );
};
