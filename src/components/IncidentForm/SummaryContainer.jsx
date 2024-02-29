import React from "react";

const SummaryContainer = ({ values, heading }) => {
  return (
    <div className="summary-wrapper">
      <p className="font-bold mb-3">{heading}</p>
      <div className="summary-container">
        {values.map((item, index) => (
          <div key={index}>
            <p className="property-label">{item.label}</p>
            <p className="property-value">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryContainer;
