import { ErrorMessage, Field, useFormikContext } from "formik";
import React, { useState, useEffect } from "react";
import TranslationComponent from "../TranslationComponent";
import { LocationDropdown } from "./FormDropdowns";

const Step1 = () => {
  const [textareaHeight, setTextareaHeight] = useState("47px");
  const [wordCount, setWordCount] = useState(0);

  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    // Count words
    const words = values.IncidentDescription.trim().split(/\s+/);
    setWordCount(values.IncidentDescription.trim() === "" ? 0 : words.length);
  }, [values.IncidentDescription]);

  const handleChange = (event) => {
    const textarea = event.target;
    setTextareaHeight("");
    setTextareaHeight(Math.min(textarea.scrollHeight, 300) + "px");

    // Count words
    const words = textarea.value.trim().split(/\s+/);
    setWordCount(textarea.value.trim() === "" ? 0 : words.length);

    setFieldValue("IncidentDescription", event.target.value);
  };

  const schoolType = localStorage.getItem("schoolType");

  return (
    <div className="step-container">
      <TranslationComponent
        keys={["incident_report_form_intro"]}
        school={schoolType}
        className="step-heading"
      />
      <div>
        <label htmlFor="locationId">Waar</label>
        <LocationDropdown />
        <ErrorMessage name="LocationId" component="div" className="error" />
      </div>
      <div className="mt-3">
        <label htmlFor="datetime">
          <TranslationComponent keys={["when"]} school={schoolType} />
        </label>
        <Field
          type="date"
          name="IncidentDate"
          className="input-field dateField"
        />
        <ErrorMessage name="IncidentDate" component="div" className="error" />
      </div>
      <div className="mt-3">
        <label htmlFor="IncidentDescription">
          <TranslationComponent keys={["what_happened"]} school={schoolType} />
        </label>
        <Field
          as="textarea"
          name="IncidentDescription"
          className="input-field dateField"
          style={{ height: textareaHeight, minHeight: "47px" }}
          onChange={handleChange}
        />
        <ErrorMessage
          name="IncidentDescription"
          component="div"
          className="error"
        />
      </div>
      <div className="word-count">{wordCount} / 500 woorden</div>
    </div>
  );
};

export default Step1;
