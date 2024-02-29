import { ErrorMessage, Field, useFormikContext } from "formik";
import React, { useState } from "react";
import TranslationComponent from "../TranslationComponent";
import { LocationDropdown } from "./FormDropdowns";

const Step1 = () => {
  const [textareaHeight, setTextareaHeight] = useState("47px");
  const [wordCount, setWordCount] = useState(0);

  const { values, setFieldValue } = useFormikContext();

  const handleChange = (event) => {
    const textarea = event.target;
    setTextareaHeight("");
    setTextareaHeight(Math.min(textarea.scrollHeight, 300) + "px");

    // Count words
    const words = textarea.value.trim().split(/\s+/);
    setWordCount(textarea.value.trim() === "" ? 0 : words.length);

    setFieldValue("whatHappened", event.target.value);
  };

  return (
    <div className="step-container">
      <TranslationComponent
        keys={["incident_report_form_intro"]}
        school="basisschool"
        className="step-heading"
      />
      <div>
        <label htmlFor="location">Waar</label>
        <LocationDropdown />
        <ErrorMessage name="location" component="div" className="error" />
      </div>
      <div className="mt-3">
        <label htmlFor="datetime">
          <TranslationComponent keys={["when"]} school="basisschool" />
        </label>
        <Field type="date" name="date" className="input-field dateField" />
        <ErrorMessage name="date" component="div" className="error" />
      </div>
      <div className="mt-3">
        <label htmlFor="whatHappened">
          <TranslationComponent keys={["what_happened"]} school="basisschool" />
        </label>
        <Field
          as="textarea"
          name="whatHappened"
          className="input-field dateField"
          style={{ height: textareaHeight, minHeight: "47px" }}
          onChange={handleChange}
        />
        <ErrorMessage name="whatHappened" component="div" className="error" />
      </div>
      <div className="word-count">{wordCount} / 500 words</div>
    </div>
  );
};

export default Step1;
