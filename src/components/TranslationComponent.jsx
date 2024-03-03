import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TranslationComponent = ({ school, keys, className }) => {
  const [translations, setTranslations] = useState({});
  const [language, setLanguage] = useState("basisschool");

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        let cachedTranslations = localStorage.getItem(`${school}_translations`);
        if (cachedTranslations) {
          setTranslations(JSON.parse(cachedTranslations));
        } else {
          const response = await fetch(
            `https://wjhulzebosch.nl/Avarix/MeldboxApi/Translations/${school}`
          );
          const data = await response.json();
          setTranslations(data);
          localStorage.setItem(`${school}_translations`, JSON.stringify(data));
        }
        setLanguage(school);
      } catch (error) {
        console.error("Error fetching translations:", error);
      }
    };

    if (school !== "middelbare_school" && school !== "invalid") {
      fetchTranslations();
    } else {
      fetchTranslations("basisschool");
    }
  }, [school]);

  const translate = (key) => {
    return translations[key] || <Skeleton />;
  };

  return (
    <>
      {keys.map((key) => (
        <span className={className} key={key}>
          {translate(key)}
        </span>
      ))}
    </>
  );
};

export default TranslationComponent;
