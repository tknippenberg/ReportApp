import React, { useState } from "react";
import TranslationComponent from "../TranslationComponent";
import RadioButton from "./RadioButton";
import { ErrorMessage, Field, useFormikContext } from "formik";
import { ClassesDropdown } from "./FormDropdowns";

const Step5 = () => {
  const { values, setFieldValue } = useFormikContext();

  const handleChange = (valueName, event) => {
    setFieldValue(valueName, event.target.value);
  };

  return (
    <>
      <div className="step-container">
        <TranslationComponent
          keys={["who_was_bully"]}
          school="basisschool"
          className="step-heading"
        />

        <div>
          <div>
            <label htmlFor="bullyFirstName">
              <TranslationComponent keys={["firstname"]} school="basisschool" />
            </label>
            <Field
              type="text"
              name="bullyFirstName"
              className="input-field"
              placeholder="Voer uw voornaam in"
            />
            <ErrorMessage
              name="bullyFirstName"
              component="div"
              className="error"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="bullyLastName">
              <TranslationComponent keys={["lastname"]} school="basisschool" />
            </label>
            <Field
              type="text"
              name="bullyLastName"
              className="input-field"
              placeholder="Voer uw achternaam in"
            />
            <ErrorMessage
              name="bullyLastName"
              component="div"
              className="error"
            />
          </div>
          <div className="mt-3">
            <label>
              <TranslationComponent keys={["gender"]} school="basisschool" />
            </label>
            <div className="flex items-center gap-5 flex-wrap">
              <RadioButton
                name="bullyGender"
                value="male"
                onChange={(e) => handleChange("bullyGender", e)}
              />
              <RadioButton
                name="bullyGender"
                value="female"
                onChange={(e) => handleChange("bullyGender", e)}
              />
              <RadioButton
                name="bullyGender"
                value="other"
                onChange={(e) => handleChange("bullyGender", e)}
              />
            </div>
            <ErrorMessage
              name="bullyGender"
              component="div"
              className="error"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="class">
              {" "}
              <TranslationComponent keys={["class"]} school="basisschool" />
            </label>
            <ClassesDropdown name="bullyClass" />
            <ErrorMessage name="bullyClass" component="div" className="error" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step5;
