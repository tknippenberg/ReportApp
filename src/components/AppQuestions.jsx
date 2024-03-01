import React from "react";
import TranslationComponent from "./TranslationComponent";

const AppQuestions = () => {
  const schoolType = localStorage.getItem("schoolType");

  return (
    <div className="app-wrapper mt-9">
      <TranslationComponent
        school={schoolType}
        keys={["welcome_to_app"]}
        className="heading"
      />
      <div className="app-question-container">
        <div className="app-item py-3 px-3">
          <TranslationComponent
            school={schoolType}
            keys={["lorem"]}
            className="app-question"
          />
          <TranslationComponent
            school={schoolType}
            keys={["lorem_ipsem"]}
            className="app-answer"
          />
        </div>
        <div className="app-item py-3 px-3 mt-5">
          <TranslationComponent
            school={schoolType}
            keys={["lorem"]}
            className="app-question"
          />
          <TranslationComponent
            school={schoolType}
            keys={["lorem_ipsem"]}
            className="app-answer"
          />
        </div>
        <div className="app-item py-3 px-3 mt-5">
          <TranslationComponent
            school={schoolType}
            keys={["lorem"]}
            className="app-question"
          />
          <TranslationComponent
            school={schoolType}
            keys={["lorem_ipsem"]}
            className="app-answer"
          />
        </div>
      </div>
    </div>
  );
};

export default AppQuestions;
