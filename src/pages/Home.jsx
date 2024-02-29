import React, { useEffect, useState } from "react";
import AppQuestions from "../components/AppQuestions";
import FAQ from "../components/FAQ";
import TranslationComponent from "../components/TranslationComponent";
import { Link } from "react-router-dom";
import SchoolComponent from "../components/SchoolComponent";

const Home = () => {
  const [isSchoolValid, setIsSchoolValid] = useState(false); // Initialize with false initially
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      const dataFromApi = localStorage.getItem("schoolId");
      setIsSchoolValid(!!dataFromApi); // Convert dataFromApi to boolean
      setIsLoading(false);
    }, 1000); // Simulating a delay of 1 second
  }, []);

  const handleClick = () => {
    if (!isSchoolValid) {
      alert("Please Add a Valid School");
    }
  };

  return (
    <>
      <AppQuestions />
      <FAQ />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {isSchoolValid ? (
            <div className="button-div">
              <Link
                onClick={handleClick}
                to="/reportIncident"
                className="report-incident-btn"
              >
                <TranslationComponent
                  school="basisschool"
                  keys={["report_incident"]}
                />
              </Link>
            </div>
          ) : (
            <div className="button-div">
              <Link
                onClick={() => alert("Please Select A Valid School")}
                to="/"
                className="report-incident-btn"
              >
                <TranslationComponent
                  school="basisschool"
                  keys={["report_incident"]}
                />
              </Link>
            </div>
          )}
        </>
      )}
      <SchoolComponent />
    </>
  );
};

export default Home;
