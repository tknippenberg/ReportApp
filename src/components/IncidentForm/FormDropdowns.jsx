import React from "react";
import useDataFetcher from "./FetchFieldsData";
import { Field } from "formik";
import TranslationComponent from "../TranslationComponent";

const schoolType = localStorage.getItem("schoolType");

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
    <Field as="select" name="LocationId" className="select-dropdown">
      <option value="">
        {" "}
        <TranslationComponent
          school={schoolType}
          keys={["select_a_location"]}
          className="form-heading"
        />
      </option>
      {locations.map((location) => (
        <option key={location.id} value={location.id}>
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

  const classObj = {};
  if (classes) {
    classes.forEach((classProp) => {
      classObj[classProp.id] = classProp.name;
    });
  }

  return (
    <Field as="select" name={name} className="select-dropdown">
      <option value="">
        <TranslationComponent
          school={schoolType}
          keys={["select_a_class"]}
          className="form-heading"
        />
      </option>
      {classes.map((schoolClass) => (
        <option key={schoolClass.id} value={schoolClass.id}>
          {schoolClass.name}
        </option>
      ))}
    </Field>
  );
};
