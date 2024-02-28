import React from "react";
import TranslationComponent from "../TranslationComponent";
import RadioButton from "./RadioButton";
import { ErrorMessage, Field, FieldArray, useFormikContext } from "formik";
import { ClassesDropdown } from "./FormDropdowns";

const Step4 = () => {
  const { values, setFieldValue } = useFormikContext();

  const handleChange = (field, index, e) => {
    setFieldValue(`victims.${index}.${field}`, e.target.value);
    setFieldValue("totalVictims", index);
  };

  const handleChange2 = (valueName, event) => {
    setFieldValue(valueName, event.target.value);
  };

  const addVictim = (index) => {
    setFieldValue("totalVictims", index);
  };

  return (
    <div className="step-container">
      <FieldArray name="victims">
        {({ push, remove }) => (
          <>
            {values.victims.map((victim, index) => (
              <div key={index} className="mb-3 more-victims-div">
                <p className="victim-heading font-bold mb-3">
                  Victim {index + 1}
                </p>
                <div>
                  <label htmlFor={`morevictimFirstName${index}`}>
                    <TranslationComponent
                      keys={["firstname"]}
                      school="basisschool"
                    />
                  </label>
                  <Field
                    type="text"
                    name={`victims.${index}.morevictimFirstName`}
                    className="input-field"
                    placeholder="Voer uw voornaam in"
                  />
                  <ErrorMessage
                    name={`victims.${index}.morevictimFirstName`}
                    component="div"
                    className="error"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor={`morevictimLastName${index}`}>
                    <TranslationComponent
                      keys={["lastname"]}
                      school="basisschool"
                    />
                  </label>
                  <Field
                    type="text"
                    name={`victims.${index}.morevictimLastName`}
                    className="input-field"
                    placeholder="Voer uw achternaam in"
                  />
                  <ErrorMessage
                    name={`victims.${index}.morevictimLastName`}
                    component="div"
                    className="error"
                  />
                </div>
                <div className="mt-3">
                  <label>
                    <TranslationComponent
                      keys={["gender"]}
                      school="basisschool"
                    />
                  </label>
                  <div className="flex items-center gap-5 flex-wrap">
                    <RadioButton
                      name={`victims.${index}.morevictimGender`}
                      value="male"
                      onChange={(e) =>
                        handleChange("morevictimGender", index, e)
                      }
                    />
                    <RadioButton
                      name={`victims.${index}.morevictimGender`}
                      value="female"
                      onChange={(e) =>
                        handleChange("morevictimGender", index, e)
                      }
                    />
                    <RadioButton
                      name={`victims.${index}.morevictimGender`}
                      value="other"
                      onChange={(e) =>
                        handleChange("morevictimGender", index, e)
                      }
                    />
                  </div>
                  <ErrorMessage
                    name={`victims.${index}.morevictimGender`}
                    component="div"
                    className="error"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor={`class${index}`}>
                    <TranslationComponent
                      keys={["class"]}
                      school="basisschool"
                    />
                  </label>
                  <ClassesDropdown name={`victims.${index}.morevictimClass`} />
                  <ErrorMessage
                    name={`victims.${index}.morevictimClass`}
                    component="div"
                    className="error"
                  />
                </div>
              </div>
            ))}

            <TranslationComponent
              keys={["more_victims"]}
              school="basisschool"
              className="step-heading"
            />
            <div className="flex items-center gap-5 flex-wrap">
              <RadioButton
                name="moreVictims"
                value="yes"
                onChange={(e) => {
                  push({
                    morevictimFirstName: "",
                    morevictimLastName: "",
                    morevictimGender: "",
                    victimClass: "",
                  });
                }}
              />
              <RadioButton
                name="moreVictims"
                value="no"
                onChange={(e) => {
                  handleChange2("moreVictims", e);
                }}
              />
            </div>
          </>
        )}
      </FieldArray>
    </div>
  );
};

export default Step4;
