import React from "react";
import TranslationComponent from "../TranslationComponent";
import SummaryContainer from "./SummaryContainer";
import { generateBullies, generateVictims } from "../../utils/FormData";

const Summary = ({ values }) => {
  const schoolType = localStorage.getItem("schoolType");

  const yourData = [
    {
      label: (
        <>
          <TranslationComponent keys={["firstname"]} school={schoolType} />
        </>
      ),
      value: values.firstname,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["lastname"]} school={schoolType} />
        </>
      ),
      value: values.lastname,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["gender"]} school={schoolType} />
        </>
      ),
      value: values.gender,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["email_address"]} school={schoolType} />
        </>
      ),
      value: values.email_address,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["role"]} school={schoolType} />
        </>
      ),
      value: values.role,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["class"]} school={schoolType} />
        </>
      ),
      value: values.myClass,
    },
  ];

  return (
    <div className="step-container">
      <TranslationComponent
        keys={["check_summary_report"]}
        school={schoolType}
        className="step-heading"
      />
      <TranslationComponent
        keys={["your_data"]}
        school={schoolType}
        className="step-heading font-bold"
      />
      <SummaryContainer values={yourData} showNumber={false} />
      
      {values.victims.map(
        (
          {
            morevictimFirstName,
            morevictimLastName,
            morevictimGender,
            victimClass,
          },
          index
        ) => {
          return (
            <>
              <p className="font-bold mb-3">
                {" "}
                <TranslationComponent
                  keys={["victim"]}
                  school={schoolType}
                  className="inline"
                />{" "}
                {index + 1}
              </p>
              <div className="summary-container">
                <div key={index}>
                  <TranslationComponent
                    keys={["firstname"]}
                    school={schoolType}
                    className="property-label"
                  />
                  <p className="property-value">{morevictimFirstName}</p>
                  <TranslationComponent
                    keys={["lastname"]}
                    school={schoolType}
                    className="property-label"
                  />
                  <p className="property-value">{morevictimLastName}</p>
                  <TranslationComponent
                    keys={["gender"]}
                    school={schoolType}
                    className="property-label"
                  />
                  <p className="property-value">{morevictimGender}</p>
                  <TranslationComponent
                    keys={["class"]}
                    school={schoolType}
                    className="property-label"
                  />
                  <p className="property-value">{victimClass}</p>
                </div>
              </div>
            </>
          );
        }
      )}

      {values.bullies.map(
        (
          {
            morebulliesFirstName,
            morebulliesLastName,
            morebulliesGender,
            morebulliesClass,
          },
          index
        ) => {
          return (
            <>
              <p className="font-bold mb-3">
                {" "}
                <TranslationComponent
                  keys={["bully"]}
                  school={schoolType}
                  className="inline"
                />{" "}
                {index + 1}
              </p>
              <div className="summary-container">
                <div key={index}>
                  <TranslationComponent
                    keys={["firstname"]}
                    school={schoolType}
                    className="property-label"
                  />
                  <p className="property-value">{morebulliesFirstName}</p>
                  <TranslationComponent
                    keys={["lastname"]}
                    school={schoolType}
                    className="property-label"
                  />
                  <p className="property-value">{morebulliesLastName}</p>
                  <TranslationComponent
                    keys={["gender"]}
                    school={schoolType}
                    className="property-label"
                  />
                  <p className="property-value">{morebulliesGender}</p>
                  <TranslationComponent
                    keys={["class"]}
                    school={schoolType}
                    className="property-label"
                  />
                  <p className="property-value">{morebulliesClass}</p>
                </div>
              </div>
            </>
          );
        }
      )}
    </div>
  );
};

export default Summary;
