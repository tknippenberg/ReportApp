import React, { useState, useEffect } from "react";

const SchoolComponent = () => {
  const [schoolId, setSchoolId] = useState(null);
  const [isValidSchool, setIsValidSchool] = useState(false);

  const checkSchoolValidity = async (id) => {
    try {
      const response = await fetch(
        `https://wjhulzebosch.nl/Avarix/MeldboxApi/School/${id}`
      );
      const data = await response.json();
      if (data.error) {
        setIsValidSchool(false);
      } else {
        setIsValidSchool(true);
        localStorage.setItem("schoolId", id); // Only set the school ID in localStorage if it's valid
      }
    } catch (error) {
      console.error("Error checking school validity:", error);
      setIsValidSchool(false);
    }
  };

  const getSchoolId = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const idFromParams = queryParams.get("schoolId");
    const idFromLocalStorage = localStorage.getItem("schoolId");
    return idFromParams || idFromLocalStorage;
  };

  useEffect(() => {
    const id = getSchoolId();
    if (id) {
      setSchoolId(id);
      checkSchoolValidity(id);
    } else {
      setIsValidSchool(false);
    }
  }, []);

  return <div>{/* Your component JSX here */}</div>;
};

export default SchoolComponent;
