import React from "react";
import { formatPrice } from "../utils";

function AgentStats(props) {
  console.log(props.data);
  const { sales, rentals } = props.data;
  return (
    <div className="stats-summary">
      <div className="stats-card">
        <h3>{sales.count}</h3>
        <h5>Total Sales</h5>
      </div>
      <div className="stats-card">
        <h3>{formatPrice(sales.avgPrice)}</h3>
        <h5>Avg Sales Price</h5>
      </div>
      <div className="stats-card">
        <h3>{rentals.count}</h3>
        <h5>Total Rentals</h5>
      </div>
      <div className="stats-card">
        <h3>{formatPrice(rentals.avgPrice)}</h3>
        <h5>Avg Rental Price</h5>
      </div>
    </div>
  );
}

export default AgentStats;
