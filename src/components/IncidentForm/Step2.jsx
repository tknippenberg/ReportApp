import { ErrorMessage, Field, useFormikContext } from "formik";
import React, { useState } from "react";
import TranslationComponent from "../TranslationComponent";
import RadioButton from "./RadioButton";
import useDataFetcher from "./FetchFieldsData";
import { ClassesDropdown } from "./FormDropdowns";

const Step2 = () => {
  const { values, setFieldValue } = useFormikContext();
  const [isStudent, setIsStudent] = useState(true);

  const handleChange = (valueName, event) => {
    setFieldValue(valueName, event.target.value);
  };

  const schoolType = localStorage.getItem("schoolType");

  return (
    <>
      <div className="step-container">
        <TranslationComponent
          keys={["enter_your_data"]}
          school={schoolType}
          className="step-heading"
        />
        <div>
          <label htmlFor="firstname">
            <TranslationComponent keys={["firstname"]} school={schoolType} />
          </label>
          <Field
            type="text"
            name="firstname"
            className="input-field"
            placeholder="Voer uw voornaam in"
          />
          <ErrorMessage name="firstname" component="div" className="error" />
        </div>
        <div className="mt-3">
          <label htmlFor="lastname">
            <TranslationComponent keys={["lastname"]} school={schoolType} />
          </label>
          <Field
            type="text"
            name="lastname"
            className="input-field"
            placeholder="Voer uw achternaam in"
          />
          <ErrorMessage name="lastname" component="div" className="error" />
        </div>
        <div className="mt-3">
          <label>
            <TranslationComponent keys={["gender"]} school={schoolType} />
          </label>
          <div className="flex items-center gap-5 flex-wrap">
            <RadioButton
              name="gender"
              value="male"
              onChange={(e) => handleChange("gender", e)}
            />
            <RadioButton
              name="gender"
              value="female"
              onChange={(e) => handleChange("gender", e)}
            />
            <RadioButton
              name="gender"
              value="other"
              onChange={(e) => handleChange("gender", e)}
            />
          </div>
          <ErrorMessage name="gender" component="div" className="error" />
        </div>
        <div className="mt-3">
          <label htmlFor="email_address">
            <TranslationComponent
              keys={["email_address"]}
              school={schoolType}
            />
          </label>
          <Field
            type="email"
            name="email_address"
            className="input-field"
            placeholder="Voer uw e-mailadres in"
          />
          <ErrorMessage
            name="email_address"
            component="div"
            className="error"
          />
        </div>
        <div className="mt-3">
          <label>
            <TranslationComponent keys={["role"]} school={schoolType} />
          </label>
          <div className="flex items-center gap-5 flex-wrap">
            <RadioButton
              name="role"
              value="student"
              onChange={(e) => {
                handleChange("role", e);
                setIsStudent(true);
              }}
            />
            <RadioButton
              name="role"
              value="parent"
              onChange={(e) => {
                handleChange("role", e);
                setIsStudent(false);
              }}
            />
            <RadioButton
              name="role"
              value="teacher"
              onChange={(e) => {
                handleChange("role", e);
                setIsStudent(false);
              }}
            />
            <RadioButton
              name="role"
              value="other"
              onChange={(e) => {
                handleChange("role", e);
                setIsStudent(false);
              }}
            />
          </div>
          <ErrorMessage name="role" component="div" className="error" />
        </div>
        {isStudent ? (
          <div className="mt-3">
            <label htmlFor="class">
              {" "}
              <TranslationComponent keys={["class"]} school={schoolType} />
            </label>
            <ClassesDropdown name="myClass" />
            <ErrorMessage name="myClass" component="div" className="error" />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Step2;
