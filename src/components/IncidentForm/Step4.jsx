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

  const schoolType = localStorage.getItem("schoolType");

  return (
    <div className="step-container">
      <FieldArray name="victims">
        {({ push, remove, form: { errors, touched } }) => (
          <>
            {values.victims.map((victim, index) => {
              let errorMsgs = null;
              if (errors.victims && errors.victims[index] && touched.victims) {
                errorMsgs = {
                  morevictimFirstName:
                    errors.victims[index].morevictimFirstName,
                  morevictimLastName: errors.victims[index].morevictimLastName,
                  morevictimGender: errors.victims[index].morevictimGender,
                };
              }
              return (
                <div key={index} className="mb-3 more-victims-div">
                  <p className="victim-heading font-bold mb-3">
                    Victim {index + 1}
                  </p>
                  <div>
                    <label htmlFor={`morevictimFirstName${index}`}>
                      <TranslationComponent
                        keys={["firstname"]}
                        school={schoolType}
                      />
                    </label>
                    <Field
                      type="text"
                      name={`victims.${index}.morevictimFirstName`}
                      className="input-field"
                      placeholder="Voer uw voornaam in"
                    />
                    {errorMsgs?.morevictimFirstName ? (
                      <div className="error">
                        {errorMsgs.morevictimFirstName}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mt-3">
                    <label htmlFor={`morevictimLastName${index}`}>
                      <TranslationComponent
                        keys={["lastname"]}
                        school={schoolType}
                      />
                    </label>
                    <Field
                      type="text"
                      name={`victims.${index}.morevictimLastName`}
                      className="input-field"
                      placeholder="Voer uw achternaam in"
                    />
                    {errorMsgs?.morevictimLastName ? (
                      <div className="error">
                        {errorMsgs.morevictimLastName}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mt-3">
                    <label>
                      <TranslationComponent
                        keys={["gender"]}
                        school={schoolType}
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
                    {errorMsgs?.morevictimGender ? (
                      <div className="error">{errorMsgs.morevictimGender}</div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mt-3">
                    <label htmlFor={`class${index}`}>
                      <TranslationComponent
                        keys={["class"]}
                        school={schoolType}
                      />
                    </label>
                    <ClassesDropdown
                      name={`victims.${index}.morevictimClass`}
                    />
                    <ErrorMessage
                      name={`victims.${index}.morevictimClass`}
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              );
            })}

            <TranslationComponent
              keys={["more_victims"]}
              school={schoolType}
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
