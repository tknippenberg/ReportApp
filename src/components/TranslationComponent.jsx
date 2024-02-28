import React, { useState, useEffect } from "react";

const TranslationComponent = ({ school, keys, className }) => {
  const [translations, setTranslations] = useState({});
  const [language, setLanguage] = useState("basisschool");

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await fetch(
          `https://wjhulzebosch.nl/Avarix/MeldboxApi/Translations/${school}`
        );
        const data = await response.json();
        setTranslations(data);

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
    return translations[key] || key;
  };

  return (
    <>
      {keys.map((key) => (
        <p className={className} key={key}>
          {translate(key)}
        </p>
      ))}
    </>
  );
};

export default TranslationComponent;
