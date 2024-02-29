import { Field } from "formik";
import React from "react";
import TranslationComponent from "../TranslationComponent";

const RadioButton = ({ name, value, onChange, checked }) => {
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
        <TranslationComponent keys={[value]} school="basisschool" />
      </label>
    </div>
  );
};

export default RadioButton;
