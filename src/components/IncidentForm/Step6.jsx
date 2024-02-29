import React from "react";
import TranslationComponent from "../TranslationComponent";
import RadioButton from "./RadioButton";
import { ErrorMessage, Field, FieldArray, useFormikContext } from "formik";
import { ClassesDropdown } from "./FormDropdowns";

const Step6 = () => {
  const { values, setFieldValue } = useFormikContext();

  const handleChange = (field, index, e) => {
    setFieldValue(`bullies.${index}.${field}`, e.target.value);
    setFieldValue("totalBullies", index);
  };

  const handleChange2 = (valueName, event) => {
    setFieldValue(valueName, event.target.value);
  };

  return (
    <div className="step-container">
      <FieldArray name="bullies">
        {({ push, remove, form: { errors, touched } }) => (
          <>
            {values.bullies.map((bully, index) => {
              let errorMsgs = null;
              if (errors.bullies && errors.bullies[index] && touched.bullies) {
                errorMsgs = {
                  morebulliesFirstName:
                    errors.bullies[index].morebulliesFirstName,
                  morebulliesLastName:
                    errors.bullies[index].morebulliesLastName,
                  morebulliesGender: errors.bullies[index].morebulliesGender,
                };
              }
              return (
                <div key={index} className="mb-3 more-victims-div">
                  <p className="victim-heading font-bold mb-3">
                    Bully {index + 1}
                  </p>
                  <div>
                    <label htmlFor={`morebulliesFirstName${index}`}>
                      <TranslationComponent
                        keys={["firstname"]}
                        school="basisschool"
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
                        school="basisschool"
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
                        school="basisschool"
                      />
                    </label>
                    <div className="flex items-center gap-5 flex-wrap">
                      <RadioButton
                        name={`bullies.${index}.morebulliesGender`}
                        value="male"
                        onChange={(e) =>
                          handleChange("morebulliesGender", index, e)
                        }
                      />
                      <RadioButton
                        name={`bullies.${index}.morebulliesGender`}
                        value="female"
                        onChange={(e) =>
                          handleChange("morebulliesGender", index, e)
                        }
                      />
                      <RadioButton
                        name={`bullies.${index}.morebulliesGender`}
                        value="other"
                        onChange={(e) =>
                          handleChange("morebulliesGender", index, e)
                        }
                      />
                    </div>
                    {errorMsgs?.morebulliesGender ? (
                      <div className="error">{errorMsgs.morebulliesGender}</div>
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
              school="basisschool"
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
  );
};

export default Step6;
