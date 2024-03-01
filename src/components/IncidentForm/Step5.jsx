import React, { useState } from "react";
import TranslationComponent from "../TranslationComponent";
import RadioButton from "./RadioButton";
import { ErrorMessage, Field, FieldArray, useFormikContext } from "formik";
import { ClassesDropdown } from "./FormDropdowns";

const Step5 = () => {
  const { values, setFieldValue } = useFormikContext();

  const handleChange = (valueName, event) => {
    setFieldValue(valueName, event.target.value);
  };

  const handleChange3 = (field, index, e) => {
    setFieldValue(`bullies.${index}.${field}`, e.target.value);
    setFieldValue("totalBullies", index);
  };

  const handleChange2 = (valueName, event) => {
    setFieldValue(valueName, event.target.value);
  };

  const schoolType = localStorage.getItem("schoolType");

  return (
    <>
      <div className="step-container">
        <TranslationComponent
          keys={["who_was_bully"]}
          school={schoolType}
          className="step-heading"
        />

        <div>
          <div>
            <label htmlFor="bullyFirstName">
              <TranslationComponent keys={["firstname"]} school={schoolType} />
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
              <TranslationComponent keys={["lastname"]} school={schoolType} />
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
              <TranslationComponent keys={["gender"]} school={schoolType} />
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
          <div className="mt-3 mb-5">
            <label htmlFor="class">
              {" "}
              <TranslationComponent keys={["class"]} school={schoolType} />
            </label>
            <ClassesDropdown name="bullyClass" />
            <ErrorMessage name="bullyClass" component="div" className="error" />
          </div>
        </div>
        <FieldArray name="bullies">
          {({ push, remove, form: { errors, touched } }) => (
            <>
              {values.bullies.map((bully, index) => {
                let errorMsgs = null;
                if (
                  errors.bullies &&
                  errors.bullies[index] &&
                  touched.bullies &&
                  touched.bullies[index]
                ) {
                  errorMsgs = {
                    morebulliesFirstName: touched.bullies[index]
                      ?.morebulliesFirstName
                      ? errors.bullies[index].morebulliesFirstName
                      : null,
                    morebulliesLastName: touched.bullies[index]
                      ?.morebulliesLastName
                      ? errors.bullies[index].morebulliesLastName
                      : null,
                    morebulliesGender: touched.bullies[index]?.morebulliesGender
                      ? errors.bullies[index].morebulliesGender
                      : null,
                  };
                }
                return (
                  <div key={index} className="mb-3 more-victims-div mt-5">
                    <p className="victim-heading font-bold mb-3">
                      <TranslationComponent
                        keys={["bully"]}
                        school={schoolType}
                        className="inline"
                      />{" "}
                      {index + 1}
                    </p>
                    <div>
                      <label htmlFor={`morebulliesFirstName${index}`}>
                        <TranslationComponent
                          keys={["firstname"]}
                          school={schoolType}
                        />
                      </label>
                      <Field
                        type="text"
                        name={`bullies.${index}.morebulliesFirstName`}
                        className="input-field"
                        placeholder="Voer uw voornaam in"
                      />
                      {errorMsgs?.morebulliesFirstName ? (
                        <div className="error">
                          {errorMsgs.morebulliesFirstName}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="mt-3">
                      <label htmlFor={`morebulliesLastName${index}`}>
                        <TranslationComponent
                          keys={["lastname"]}
                          school={schoolType}
                        />
                      </label>
                      <Field
                        type="text"
                        name={`bullies.${index}.morebulliesLastName`}
                        className="input-field"
                        placeholder="Voer uw achternaam in"
                      />
                      {errorMsgs?.morebulliesLastName ? (
                        <div className="error">
                          {errorMsgs.morebulliesLastName}
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
                          name={`bullies.${index}.morebulliesGender`}
                          value="male"
                          onChange={(e) =>
                            handleChange3("morebulliesGender", index, e)
                          }
                        />
                        <RadioButton
                          name={`bullies.${index}.morebulliesGender`}
                          value="female"
                          onChange={(e) =>
                            handleChange3("morebulliesGender", index, e)
                          }
                        />
                        <RadioButton
                          name={`bullies.${index}.morebulliesGender`}
                          value="other"
                          onChange={(e) =>
                            handleChange3("morebulliesGender", index, e)
                          }
                        />
                      </div>
                      {errorMsgs?.morebulliesGender ? (
                        <div className="error">
                          {errorMsgs.morebulliesGender}
                        </div>
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
                        name={`bullies.${index}.morebulliesClass`}
                      />
                      <ErrorMessage
                        name={`bullies.${index}.morebulliesClass`}
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
                );
              })}

              <TranslationComponent
                keys={["more_bullies"]}
                school={schoolType}
                className="step-heading"
              />
              <div className="flex items-center gap-5 flex-wrap">
                <RadioButton
                  name="moreBullies"
                  value="yes"
                  onChange={(e) => {
                    push({
                      morebulliesFirstName: "",
                      morebulliesLastName: "",
                      morebulliesGender: "",
                      bulliesClass: "",
                    });
                  }}
                />
                <RadioButton
                  name="moreBullies"
                  value="no"
                  onChange={(e) => {
                    handleChange2("moreBullies", e);
                  }}
                />
              </div>
            </>
          )}
        </FieldArray>
      </div>
    </>
  );
};

export default Step5;
