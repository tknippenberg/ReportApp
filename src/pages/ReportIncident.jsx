import React, { useState, useEffect } from "react";
import IncidentForm from "../components/IncidentForm/IncidentForm";
import SchoolComponent from "../components/SchoolComponent";
import { Navigate } from "react-router-dom";

const ReportIncident = () => {
  const [isSchooldValid, setIsSchoolValid] = useState(
    localStorage.getItem("schoolId")
  );

  useEffect(() => {
    // Check if schoolId is valid in localStorage
    const storedSchoolId = localStorage.getItem("schoolId");
    setIsSchoolValid(storedSchoolId !== null);

    const handleStorageChange = () => {
      setIsSchoolValid(localStorage.getItem("schoolId"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div>
      <SchoolComponent />
      {isSchooldValid ? <IncidentForm /> : <Navigate to="/" />}
    </div>
  );
};

export default ReportIncident;
