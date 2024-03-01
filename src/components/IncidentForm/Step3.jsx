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
      setIsVictimSelf(event.target.value === "selft");
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
                    touched.someoneElseFields
                  ) {
                    errorMsgs = {
                      victimFirstName:
                        errors.someoneElseFields[index].victimFirstName,
                      victimLastName:
                        errors.someoneElseFields[index].victimLastName,
                      victimGender:
                        errors.someoneElseFields[index].victimGender,
                    };
                  }
                  return (
                    <div key={index} className="someone-else-container">
                      <div>
                        <label htmlFor="victimFirstName">
                          <TranslationComponent
                            keys={["firstname"]}
                            school="basisschool"
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
                            school="basisschool"
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
                            school="basisschool"
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
                            school="basisschool"
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
                      school="basisschool"
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
                  touched.victims
                ) {
                  errorMsgs = {
                    morevictimFirstName:
                      errors.victims[index].morevictimFirstName,
                    morevictimLastName:
                      errors.victims[index].morevictimLastName,
                    morevictimGender: errors.victims[index].morevictimGender,
                  };
                }
                return (
                  <div key={index} className="mb-3 more-victims-div mt-5">
                    <p className="victim-heading font-bold mb-3">
                      <TranslationComponent
                        keys={["victim"]}
                        school="basisschool"
                        className="inline"
                      />{" "}
                      {index + 1}
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
                          school="basisschool"
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
                          school="basisschool"
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
                          school="basisschool"
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
      {/* <div className="step-container"> */}

      {/* </div> */}
    </>
  );
};

export default Step3;
