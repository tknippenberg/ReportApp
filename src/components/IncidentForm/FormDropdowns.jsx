import React from "react";
import useDataFetcher from "./FetchFieldsData";
import { Field } from "formik";

export const LocationDropdown = () => {
  const schoolId = localStorage.getItem("schoolId");
  const { data: locations, locationError } = useDataFetcher(
    `https://wjhulzebosch.nl/Avarix/MeldboxApi/School/${schoolId}/Locations`,
    "locations",
    (locations) => {
      return Object.entries(locations).map(([id, name]) => ({
        id: parseInt(id),
        name,
      }));
    }
  );
  return (
    <Field as="select" name="location" className="select-dropdown">
      {locations.map((location) => (
        <option key={location.id} value={location.name}>
          {location.name}
        </option>
      ))}
    </Field>
  );
};

export const ClassesDropdown = ({ name }) => {
  const schoolId = localStorage.getItem("schoolId");
  const { data: classes, classError } = useDataFetcher(
    `https://www.wjhulzebosch.nl/Avarix/MeldboxApi/School/${schoolId}/Classes`,
    "classes",
    (classes) => {
      return Object.entries(classes).map(([id, name]) => ({
        id: parseInt(id),
        name,
      }));
    }
  );

  return (
    <Field as="select" name={name} className="select-dropdown">
      {classes.map((schoolClass) => (
        <option key={schoolClass.id} value={schoolClass.name}>
          {schoolClass.name}
        </option>
      ))}
    </Field>
  );
};
