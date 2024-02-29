import React from "react";
import TranslationComponent from "./TranslationComponent";

const AppQuestions = () => {
  return (
    <div className="app-wrapper mt-9">
      <TranslationComponent
        school="basisschool"
        keys={["welcome_to_app"]}
        className="heading"
      />
      <div className="app-question-container">
        <div className="app-item py-3 px-3">
          <TranslationComponent
            school="basisschool"
            keys={["lorem"]}
            className="app-question"
          />
          <TranslationComponent
            school="basisschool"
            keys={["lorem_ipsem"]}
            className="app-answer"
          />
        </div>
        <div className="app-item py-3 px-3 mt-5">
          <TranslationComponent
            school="basisschool"
            keys={["lorem"]}
            className="app-question"
          />
          <TranslationComponent
            school="basisschool"
            keys={["lorem_ipsem"]}
            className="app-answer"
          />
        </div>
        <div className="app-item py-3 px-3 mt-5">
          <TranslationComponent
            school="basisschool"
            keys={["lorem"]}
            className="app-question"
          />
          <TranslationComponent
            school="basisschool"
            keys={["lorem_ipsem"]}
            className="app-answer"
          />
        </div>
      </div>
    </div>
  );
};

export default AppQuestions;
