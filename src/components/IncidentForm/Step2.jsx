import { ErrorMessage, Field, useFormikContext } from "formik";
import React, { useState } from "react";
import TranslationComponent from "../TranslationComponent";
import RadioButton from "./RadioButton";
import useDataFetcher from "./FetchFieldsData";
import { ClassesDropdown } from "./FormDropdowns";

const Step2 = () => {
  const { values, setFieldValue } = useFormikContext();
  const [isStudent, setIsStudent] = useState(true);

  const handleChange = (fieldName, event) => {
    const { value } = event.target;

    // Check if the field belongs to the notifier object
    if (
      [
        "Firstname",
        "Lastname",
        "Gender",
        "Emailaddress",
        "Role",
        "Group",
      ].includes(fieldName)
    ) {
      setFieldValue(`Notifier.${fieldName}`, value); // Set value in the notifier object
    } else {
      setFieldValue(fieldName, value); // Set value normally for other fields
    }
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
          <label htmlFor="Firstname">
            <TranslationComponent keys={["firstname"]} school={schoolType} />
          </label>
          <Field
            type="text"
            name="Notifier.Firstname"
            className="input-field"
            placeholder="Voer uw voornaam in"
            onChange={(e) => handleChange("Notifier.Firstname", e)}
          />
          <ErrorMessage
            name="Notifier.Firstname"
            component="div"
            className="error"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="Lastname">
            <TranslationComponent keys={["lastname"]} school={schoolType} />
          </label>
          <Field
            type="text"
            name="Notifier.Lastname"
            className="input-field"
            placeholder="Voer uw achternaam in"
            onChange={(e) => handleChange("Notifier.Lastname", e)}
          />
          <ErrorMessage
            name="Notifier.Lastname"
            component="div"
            className="error"
          />
        </div>
        <div className="mt-3">
          <label>
            <TranslationComponent keys={["gender"]} school={schoolType} />
          </label>
          <div className="flex items-center gap-5 flex-wrap">
            <RadioButton
              name="Notifier.Gender"
              value="male"
              onChange={(e) => handleChange("Notifier.Gender", e)}
            />
            <RadioButton
              name="Notifier.Gender"
              value="female"
              onChange={(e) => handleChange("Notifier.Gender", e)}
            />
            <RadioButton
              name="Notifier.Gender"
              value="other"
              onChange={(e) => handleChange("Notifier.Gender", e)}
            />
          </div>
          <ErrorMessage
            name="Notifier.Gender"
            component="div"
            className="error"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="Emailaddress">
            <TranslationComponent
              keys={["email_address"]}
              school={schoolType}
            />
          </label>
          <Field
            type="email"
            name="Notifier.Emailaddress"
            className="input-field"
            placeholder="Voer uw e-mailadres in"
            onChange={(e) => handleChange("Notifier.Emailaddress", e)}
          />
          <ErrorMessage
            name="Notifier.Emailaddress"
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
              name="Notifier.Role"
              value="0"
              labelName="student"
              onChange={(e) => {
                handleChange("Notifier.Role", e);
                setIsStudent(true);
              }}
            />
            <RadioButton
              name="Notifier.Role"
              value="1"
              labelName="parent"
              onChange={(e) => {
                handleChange("Notifier.Role", e);
                setIsStudent(false);
              }}
            />
            <RadioButton
              name="Notifier.Role"
              value="2"
              labelName="teacher"
              onChange={(e) => {
                handleChange("Notifier.Role", e);
                setIsStudent(false);
              }}
            />
            <RadioButton
              name="Notifier.Role"
              value="3"
              labelName={"other"}
              onChange={(e) => {
                handleChange("Notifier.Role", e);
                setIsStudent(false);
              }}
            />
          </div>
          <ErrorMessage
            name="Notifier.Role"
            component="div"
            className="error"
          />
        </div>
        {isStudent ? (
          <div className="mt-3">
            <label htmlFor="class">
              {" "}
              <TranslationComponent keys={["class"]} school={schoolType} />
            </label>
            <ClassesDropdown
              name="Notifier.Group"
              onChange={(e) => handleChange("Notifier.Group", e)}
            />
            <ErrorMessage
              name="Notifier.Group"
              component="div"
              className="error"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Step2;
