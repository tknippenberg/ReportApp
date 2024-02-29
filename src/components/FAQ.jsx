import React, { useState } from "react";
import { chevIcon } from "../assets";
import TranslationComponent from "./TranslationComponent";

const FAQ = () => {
  // Array of objects representing questions and answers
  const faqs = [
    {
      question: (
        <>
          {" "}
          <TranslationComponent school="basisschool" keys={["lorem"]} />
        </>
      ),
      answer: (
        <>
          {" "}
          <TranslationComponent school="basisschool" keys={["lorem_ipsum"]} />
        </>
      ),
    },
    {
      question: (
        <>
          {" "}
          <TranslationComponent school="basisschool" keys={["lorem"]} />
        </>
      ),
      answer: (
        <>
          {" "}
          <TranslationComponent school="basisschool" keys={["lorem_ipsum"]} />
        </>
      ),
    },
    {
      question: (
        <>
          {" "}
          <TranslationComponent school="basisschool" keys={["lorem"]} />
        </>
      ),
      answer: (
        <>
          {" "}
          <TranslationComponent school="basisschool" keys={["lorem_ipsum"]} />
        </>
      ),
    },
    {
      question: (
        <>
          {" "}
          <TranslationComponent school="basisschool" keys={["lorem"]} />
        </>
      ),
      answer: (
        <>
          {" "}
          <TranslationComponent school="basisschool" keys={["lorem_ipsum"]} />
        </>
      ),
    },
  ];

  // State to keep track of which FAQ item is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle click on an FAQ item
  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <TranslationComponent
        school="basisschool"
        keys={["frequently_asked_questions"]}
        className="heading"
      />
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-div">
            <div className="faq-item" onClick={() => handleItemClick(index)}>
              <div className="flex justify-between items-center question-div">
                <p className="faq-question">{faq.question} </p>
                <img
                  src={chevIcon}
                  className={openIndex == index ? "" : "rotate-icon"}
                />
              </div>
              {openIndex === index ? (
                <p className="answer-div">{faq.answer}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
