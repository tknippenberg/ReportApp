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
                        value="selft"
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
                        value="someone_else"
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
      </div>
    </>
  );
};

export default Step3;
