import React, { useState } from "react";
import AppQuestions from "../components/AppQuestions";
import FAQ from "../components/FAQ";
import TranslationComponent from "../components/TranslationComponent";
import { Link } from "react-router-dom";
import SchoolComponent from "../components/SchoolComponent";

const Home = () => {
  const [isSchooldValid, setIsSchoolValid] = useState(
    localStorage.getItem("schoolId")
  );
  const handleClick = () => {
    isSchooldValid ? "" : alert("Please Add a Valid School");
  };
  return (
    <>
      <AppQuestions />
      <FAQ />
      <div className="button-div">
        <Link
          onClick={handleClick}
          to="/reportIncident"
          className="report-incident-btn"
        >
          {" "}
          <TranslationComponent
            school="basisschool"
            keys={["report_incident"]}
          />
        </Link>
      </div>
      <SchoolComponent />
    </>
  );
};

export default Home;
