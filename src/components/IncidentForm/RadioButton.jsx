import { Field } from "formik";
import React from "react";
import TranslationComponent from "../TranslationComponent";

const RadioButton = ({ name, value, onChange, checked }) => {
  const schoolType = localStorage.getItem("schoolType");

  return (
    <div className="radio">
      <Field
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        // checked={checked}
      />
      <label className="radio-label flex items-end">
        <TranslationComponent keys={[value]} school={schoolType} />
      </label>
    </div>
  );
};

export default RadioButton;
