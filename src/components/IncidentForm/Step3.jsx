import React, { useState } from "react";
import TranslationComponent from "../TranslationComponent";
import RadioButton from "./RadioButton";
import { ErrorMessage, Field, useFormikContext, FieldArray } from "formik";
import { ClassesDropdown } from "./FormDropdowns";

const Step3 = () => {
  const [isVictimSelf, setIsVictimSelf] = useState(true);
  const { values, setFieldValue } = useFormikContext();
  const [height, setHeight] = useState(true);

  const handleChange = (valueName, event) => {
    setFieldValue(valueName, event.target.value);
    if (valueName === "victimWho") {
      setIsVictimSelf(event.target.value === "self");
    }
  };

  const handleChange3 = (field, index, e) => {
    setFieldValue(`victims.${index}.${field}`, e.target.value);
    setFieldValue("totalVictims", index);
  };

  const handleChange2 = (valueName, event) => {
    setFieldValue(valueName, event.target.value);
  };

  const addVictim = (index) => {
    setFieldValue("totalVictims", index);
  };
  
  const handleRemoveVictim = (indexToRemove) => {
    const updatedVictims = values.victims.filter(
      (victim, index) => index !== indexToRemove
    );
    setFieldValue("victims", updatedVictims);
  };

  const schoolType = localStorage.getItem("schoolType");

  return (
    <>
      <div className="step-container">
        <FieldArray
          name="someoneElseFields"
          render={({ push, remove, form: { errors, touched } }) => {
            return (
              <>
                {values.someoneElseFields.map((victim, index) => {
                  let errorMsgs = null;
                  if (
                    errors.someoneElseFields &&
                    errors.someoneElseFields[index] &&
                    touched.someoneElseFields &&
                    touched.someoneElseFields[index]
                  ) {
                    errorMsgs = {
                      victimFirstName: touched.someoneElseFields[index]
                        ?.victimFirstName
                        ? errors.someoneElseFields[index].victimFirstName
                        : null,
                      victimLastName: touched.someoneElseFields[index]
                        ?.victimLastName
                        ? errors.someoneElseFields[index].victimLastName
                        : null,
                      victimGender: touched.someoneElseFields[index]
                        ?.victimGender
                        ? errors.someoneElseFields[index].victimGender
                        : null,
                    };
                  }
                  return (
                    <div key={index} className="someone-else-container">
                      <div>
                        <label htmlFor="victimFirstName">
                          <TranslationComponent
                            keys={["firstname"]}
                            school={schoolType}
                          />
                        </label>
                        <Field
                          type="text"
                          name={`someoneElseFields.${index}.victimFirstName`}
                          className="input-field"
                          placeholder="Voer uw voornaam in"
                        />
                        {errorMsgs?.victimFirstName ? (
                          <div className="error">
                            {errorMsgs.victimFirstName}
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="mt-3">
                        <label htmlFor="victimLastName">
                          <TranslationComponent
                            keys={["lastname"]}
                            school={schoolType}
                          />
                        </label>
                        <Field
                          type="text"
                          name={`someoneElseFields.${index}.victimLastName`}
                          className="input-field"
                          placeholder="Voer uw achternaam in"
                        />
                        {errorMsgs?.victimLastName ? (
                          <div className="error">
                            {errorMsgs.victimLastName}
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
                            name={`someoneElseFields.${index}.victimGender`}
                            value="male"
                            onChange={(e) =>
                              handleChange(
                                `someoneElseFields.${index}.victimGender`,
                                e
                              )
                            }
                          />
                          <RadioButton
                            name={`someoneElseFields.${index}.victimGender`}
                            value="female"
                            onChange={(e) =>
                              handleChange(
                                `someoneElseFields.${index}.victimGender`,
                                e
                              )
                            }
                          />
                          <RadioButton
                            name={`someoneElseFields.${index}.victimGender`}
                            value="other"
                            onChange={(e) =>
                              handleChange(
                                `someoneElseFields.${index}.victimGender`,
                                e
                              )
                            }
                          />
                        </div>
                        {errorMsgs?.victimGender ? (
                          <div className="error">{errorMsgs.victimGender}</div>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="mt-3">
                        <label htmlFor="class">
                          {" "}
                          <TranslationComponent
                            keys={["class"]}
                            school={schoolType}
                          />
                        </label>
                        <ClassesDropdown name="victimClass" />
                        <ErrorMessage
                          name="victimClass"
                          component="div"
                          className="error"
                        />
                      </div>
                    </div>
                  );
                })}
                <div className={`${height ? "whoVictimWrapper" : ""}`}>
                  <div className="whoVictimContainer">
                    <TranslationComponent
                      keys={["are_you_victim"]}
                      school={schoolType}
                      className="step-heading"
                    />
                    <div className="flex items-center gap-5 flex-wrap">
                      <RadioButton
                        name="victimWho"
                        value="yes"
                        onChange={(e) => {
                          remove({
                            victimFirstName: "",
                            victimLastName: "",
                            victimGender: "",
                            victimClass: "",
                          });
                          handleChange("victimWho", e);
                          setHeight(true);
                        }}
                      />
                      <RadioButton
                        name="victimWho"
                        value="no"
                        onChange={(e) => {
                          handleChange("victimWho", e);
                          push({
                            victimFirstName: "",
                            victimLastName: "",
                            victimGender: "",
                            victimClass: "",
                          });
                          setHeight(false);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          }}
        />
        <FieldArray name="victims">
          {({ push, remove, form: { errors, touched } }) => (
            <>
              {values.victims.map((victim, index) => {
                let errorMsgs = null;
                if (
                  errors.victims &&
                  errors.victims[index] &&
                  touched.victims &&
                  touched.victims[index]
                ) {
                  errorMsgs = {
                    morevictimFirstName: touched.victims[index]
                      ?.morevictimFirstName
                      ? errors.victims[index].morevictimFirstName
                      : null,
                    morevictimLastName: touched.victims[index]
                      ?.morevictimLastName
                      ? errors.victims[index].morevictimLastName
                      : null,
                    morevictimGender: touched.victims[index]?.morevictimGender
                      ? errors.victims[index].morevictimGender
                      : null,
                  };
                }
                return (
                  <div key={index} className="mb-3 more-victims-div mt-5">
                    <p className="victim-heading font-bold mb-3">
                      <TranslationComponent
                        keys={["victim"]}
                        school={schoolType}
                        className="inline"
                      />{" "}
                      {index + 1}
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
                            handleChange3("morevictimGender", index, e)
                          }
                        />
                        <RadioButton
                          name={`victims.${index}.morevictimGender`}
                          value="female"
                          onChange={(e) =>
                            handleChange3("morevictimGender", index, e)
                          }
                        />
                        <RadioButton
                          name={`victims.${index}.morevictimGender`}
                          value="other"
                          onChange={(e) =>
                            handleChange3("morevictimGender", index, e)
                          }
                        />
                      </div>
                      {errorMsgs?.morevictimGender ? (
                        <div className="error">
                          {errorMsgs.morevictimGender}
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
                        name={`victims.${index}.morevictimClass`}
                      />
                      <ErrorMessage
                        name={`victims.${index}.morevictimClass`}
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="mt-3">
                      <button
                        type="button"
                        className="form-button secondary"
                        onClick={() => handleRemoveVictim(index)}
                      >
                        <TranslationComponent keys={["remove_victim"]} school={schoolType} />
                      </button>
                    </div>
                  </div>
                );
              })}

              <div className="flex items-center gap-5 flex-wrap">
                <button type="button" className="form-button" onClick={(e) => {
                    push({
                      morevictimFirstName: "",
                      morevictimLastName: "",
                      morevictimGender: "",
                      victimClass: "",
                    });
                  }}
                  ><TranslationComponent keys={["add_victim"]} school={schoolType} /></button>
              </div>
            </>
          )}
        </FieldArray>
      </div>
    </>
  );
};

export default Step3;
