import React from "react";
import TranslationComponent from "../TranslationComponent";
import SummaryContainer from "./SummaryContainer";
import useDataFetcher from "./FetchFieldsData";

const Summary = ({ values }) => {
  const schoolType = localStorage.getItem("schoolType");
  const schoolId = localStorage.getItem("schoolId");

  const roleObj = {
    0: "student",
    1: "parent",
    2: "teacher",
    3: "other",
  };

  const { data: classes, classError } = useDataFetcher(
    `https://www.wjhulzebosch.nl/Avarix/MeldboxApi/School/${schoolId}/Classes`,
    "classes",
    (classes) => {
      return Object.entries(classes).map(([id, name]) => ({
        id: parseInt(id),
        name,
      }));
    }
  );

  const classObj = {};
  if (classes) {
    classes.forEach((classProp) => {
      classObj[classProp.id] = classProp.name;
    });
  }

  console.log(classObj);

  const yourData = [
    {
      label: (
        <>
          <TranslationComponent keys={["firstname"]} school={schoolType} />
        </>
      ),
      value: values.Notifier.Firstname,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["lastname"]} school={schoolType} />
        </>
      ),
      value: values.Notifier.Lastname,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["gender"]} school={schoolType} />
        </>
      ),
      value: values.Notifier.Gender,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["email_address"]} school={schoolType} />
        </>
      ),
      value: values.Notifier.Emailaddress,
    },
    {
      label: (
        <>
          <TranslationComponent keys={["role"]} school={schoolType} />
        </>
      ),
      value: roleObj[values.Notifier.Role],
    },
    {
      label: (
        <>
          <TranslationComponent keys={["class"]} school={schoolType} />
        </>
      ),
      value: classObj[values.Notifier.Group],
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

      {values.Victims.map(({ FirstName, LastName, Gender, Group }, index) => {
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
                <p className="property-value">{FirstName}</p>
                <TranslationComponent
                  keys={["lastname"]}
                  school={schoolType}
                  className="property-label"
                />
                <p className="property-value">{LastName}</p>

                <TranslationComponent
                  keys={["gender"]}
                  school={schoolType}
                  className="property-label"
                />
                <TranslationComponent
                  keys={[Gender]}
                  school={schoolType}
                  className="property-value"
                />

                <TranslationComponent
                  keys={["class"]}
                  school={schoolType}
                  className="property-label"
                />
                <p className="property-value">{classObj[Group]}</p>
              </div>
            </div>
          </>
        );
      })}

      {values.Bullies.map(({ FirstName, LastName, Gender, Group }, index) => {
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
                <p className="property-value">{FirstName}</p>

                <TranslationComponent
                  keys={["lastname"]}
                  school={schoolType}
                  className="property-label"
                />
                <p className="property-value">{LastName}</p>

                <TranslationComponent
                  keys={["gender"]}
                  school={schoolType}
                  className="property-label"
                />
                <TranslationComponent
                  keys={[Gender]}
                  school={schoolType}
                  className="property-value"
                />

                <TranslationComponent
                  keys={["class"]}
                  school={schoolType}
                  className="property-label"
                />
                <p className="property-value">{classObj[Group]}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Summary;
