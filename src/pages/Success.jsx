import React from "react";
import { Link } from "react-router-dom";
import TranslationComponent from "../components/TranslationComponent";

const Success = () => {
  return (
    <div className="success-div">
      <TranslationComponent
        school="basisschool"
        keys={["thanks_for_report"]}
        className="success-heading font-bold"
      />
      <TranslationComponent
        school="basisschool"
        keys={["thanks_for_report_text"]}
        className="font-bold thank-you-text"
      />
      <Link to="/" className="report-incident-btn home-btn mt-3">
        <TranslationComponent school="basisschool" keys={["home"]} />
      </Link>
    </div>
  );
};

export default Success;
