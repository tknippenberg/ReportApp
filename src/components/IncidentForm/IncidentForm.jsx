import React, { useState } from "react";
import { Formik, Form } from "formik";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import { validationSchema } from "./ValidationSchema";
import TranslationComponent from "../TranslationComponent";
import Summary from "./Summary";
import { useNavigate } from "react-router-dom";

const initialValues = {
  whatHappened: "",
  date: "",
  firstname: "",
  lastname: "",
  gender: "",
  email_address: "",
  role: "",
  victimWho: "selft",
  victimFirstName: "",
  victimLastName: "",
  victimGender: "",
  bullyFirstName: "",
  bullyLastName: "",
  bullyGender: "",
  totalVictims: 0,
  totalBullies: 0,
  victims: [],
  bullies: [],
  someoneElseFields: [],
};

const IncidentForm = () => {
  const [step, setStep] = useState(0);
  const Navigate = useNavigate();
  const [submit, setSubmit] = useState(false);

  const handlePrev = () => {
    step >= 1 ? setStep(step - 1) : setStep(0);
  };

  // const handleNext = () => {
  //   setStep(step + 1);
  // };

  const handleNext = (values, { setTouched, setErrors }) => {
    try {
      // Validate only the fields for the current step
      const fieldsToValidate = Object.keys(validationSchema.fields).filter(
        (field) => {
          // Customize this condition based on your step logic
          if (step === 0) {
            return ["whatHappened", "date"].includes(field);
          } else if (step === 1) {
            return [
              "firstname",
              "lastname",
              "gender",
              "email_address",
              "role",
            ].includes(field);
          } else if (step === 2) {
            return ["someoneElseFields"].includes(field);
          } else if (step === 3) {
            return ["victims"].includes(field);
          } else if (step === 4) {
            return ["bullyFirstName", "bullyLastName", "bullyGender"].includes(
              field
            );
          } else if (step === 5) {
            return ["bullies"].includes(field);
          }
          return true; // Include all fields if not in a specific step
        }
      );

      validationSchema
        .pick(fieldsToValidate)
        .validateSync(values, { abortEarly: false });

      // Increment the step
      setStep((prevStep) => prevStep + 1);
    } catch (error) {
      if (error.name === "ValidationError") {
        // Display validation errors even if the user is trying to move to the next step
        console.error("Validation errors:", error.errors);

        // Set touched for all fields to trigger error messages
        const allFields = Object.keys(values);
        const touchedState = allFields.reduce((acc, field) => {
          acc[field] = true;
          return acc;
        }, {});
        setTouched(touchedState);

        console.log(error.errors);

        let errorsArr = [];
        if ("inner" in error && Array.isArray(error.inner)) {
          errorsArr = error.inner;
        } else {
          errorsArr = error.errors;
        }
        // Set errors to display them in the form
        const errorState = errorsArr.reduce((acc, err) => {
          acc[err.path] = err.message;
          return acc;
        }, {});
        setErrors(errorState);
      } else {
        // Handle other errors
        console.error("Error:", error.message);
      }
    }
  };

  const steps = [
    <Step1 />,
    <Step2 />,
    <Step3 />,
    <Step4 />,
    <Step5 />,
    <Step6 />,
  ];

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log(values);
    Navigate("/success");
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, values, setErrors, setTouched }) => (
          <Form>
            <div className="form-progress-container">
              <TranslationComponent
                school="basisschool"
                keys={["incident_report_form"]}
                className="form-heading"
              />
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${(step / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>
            {step === steps.length && <Summary values={values} />}
            {steps[step]}
            <div className="form-wrap">
              <div className="form-buttons-div">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="form-button previous-btn"
                >
                  Previous
                </button>
                {step == steps.length ? (
                  <button
                    type={submit ? "submit" : "button"}
                    onClick={() => setSubmit(true)}
                    className="form-button next-btn"
                  >
                    <TranslationComponent
                      keys={["send_report"]}
                      school="basisschool"
                      className="inline"
                    />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="form-button next-btn"
                    onClick={() =>
                      handleNext(values, { setTouched, setErrors })
                    }
                    // onClick={() => {
                    //   handleNext();
                    // }}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default IncidentForm;
