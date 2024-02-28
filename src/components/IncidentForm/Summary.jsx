import React from "react";
import TranslationComponent from "../TranslationComponent";
import SummaryContainer from "./SummaryContainer";
import { generateBullies, generateVictims } from "../../utils/FormData";

const Summary = ({ values }) => {
  const victim1 = [
    {
      label: (
        <>
          <TranslationComponent keys={["firstname"]} school="basisschool" />
        </>
      ),
      value: values.victimFirstName,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["lastname"]} school="basisschool" />
        </>
      ),
      value: values.victimLastName,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["gender"]} school="basisschool" />
        </>
      ),
      value: values.victimGender,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["class"]} school="basisschool" />
        </>
      ),
      value: values.victimClass,
    },
  ];

  const bully1 = [
    {
      label: (
        <>
          <TranslationComponent keys={["firstname"]} school="basisschool" />
        </>
      ),
      value: values.bullyFirstName,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["lastname"]} school="basisschool" />
        </>
      ),
      value: values.bullyLastName,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["gender"]} school="basisschool" />
        </>
      ),
      value: values.bullyGender,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["class"]} school="basisschool" />
        </>
      ),
      value: values.bullyClass,
    },
  ];

  const yourData = [
    {
      label: (
        <>
          <TranslationComponent keys={["firstname"]} school="basisschool" />
        </>
      ),
      value: values.firstname,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["lastname"]} school="basisschool" />
        </>
      ),
      value: values.lastname,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["email_address"]} school="basisschool" />
        </>
      ),
      value: values.email_address,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["role"]} school="basisschool" />
        </>
      ),
      value: values.role,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["class"]} school="basisschool" />
        </>
      ),
      value: values.class,
    },
  ];

  return (
    <div className="step-container">
      <TranslationComponent
        keys={["check_summary_report"]}
        school="basisschool"
        className="step-heading"
      />
      <TranslationComponent
        keys={["your_data"]}
        school="basisschool"
        className="step-heading font-bold"
      />
      <SummaryContainer values={yourData} />
      <SummaryContainer values={victim1} heading="Victim 1" />

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
              <p className="font-bold mb-3">Victim {index + 2}</p>
              <div className="summary-container">
                <div key={index}>
                  <TranslationComponent
                    keys={["firstname"]}
                    school="basisschool"
                    className="property-label"
                  />
                  <p className="property-value">{morevictimFirstName}</p>
                  <TranslationComponent
                    keys={["lastname"]}
                    school="basisschool"
                    className="property-label"
                  />
                  <p className="property-value">{morevictimLastName}</p>
                  <TranslationComponent
                    keys={["gender"]}
                    school="basisschool"
                    className="property-label"
                  />
                  <p className="property-value">{morevictimGender}</p>
                  <TranslationComponent
                    keys={["class"]}
                    school="basisschool"
                    className="property-label"
                  />
                  <p className="property-value">{victimClass}</p>
                </div>
              </div>
            </>
          );
        }
      )}

      {/* {values.victims.map((victim, index) => (
        <SummaryContainer
          key={`victim_${index}`}
          values={[victim]}
          heading={`Victim ${index + 2}`}
        />
      ))} */}
      {/* {generateBullies(values).map((bully, index) => (
        <SummaryContainer
          key={`bully_${index}`}
          values={[bully]}
          heading={`Bully ${index + 2}`}
        />
      ))} */}

      <SummaryContainer values={bully1} heading="Bully 1" />

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
              <p className="font-bold mb-3">Bully {index + 2}</p>
              <div className="summary-container">
                <div key={index}>
                  <TranslationComponent
                    keys={["firstname"]}
                    school="basisschool"
                    className="property-label"
                  />
                  <p className="property-value">{morebulliesFirstName}</p>
                  <TranslationComponent
                    keys={["lastname"]}
                    school="basisschool"
                    className="property-label"
                  />
                  <p className="property-value">{morebulliesLastName}</p>
                  <TranslationComponent
                    keys={["gender"]}
                    school="basisschool"
                    className="property-label"
                  />
                  <p className="property-value">{morebulliesGender}</p>
                  <TranslationComponent
                    keys={["class"]}
                    school="basisschool"
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
