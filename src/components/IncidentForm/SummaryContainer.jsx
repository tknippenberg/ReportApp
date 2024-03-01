import React from "react";
import TranslationComponent from "../TranslationComponent";

const SummaryContainer = ({ values, heading, showNumber }) => {
  const schoolType = localStorage.getItem("schoolType");

  return (
    <div className="summary-wrapper">
      <p className="font-bold mb-3">
        {" "}
        <TranslationComponent
          keys={[heading]}
          school={schoolType}
          className="inline"
        />{" "}
        {showNumber ? 1 : ""}
      </p>
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
