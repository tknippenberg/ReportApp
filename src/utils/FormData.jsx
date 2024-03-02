import { getIn } from "yup";
import TranslationComponent from "../components/TranslationComponent";

export const generateVictims = (values) => {
  const victims = [];

  console.log(values);
  for (let i = 0; i <= values.totalVictims; i++) {
    victims.push({
      label: (
        <>
          <TranslationComponent keys={["firstname"]} school={schoolType} />
          <p className="summary-values">{values[`morevictimFirstName${i}`]}</p>
          <TranslationComponent keys={["lastname"]} school={schoolType} />
          <p className="summary-values">{values[`morevictimLastName${i}`]}</p>
          <TranslationComponent keys={["gender"]} school={schoolType} />
          <p className="summary-values">{values[`morevictimGender${i}`]}</p>
          <TranslationComponent keys={["class"]} school={schoolType} />
          <p className="summary-values">{values[`victimClass${i}`]}</p>
        </>
      ),
    });
  }
  return victims;
};

export const generateBullies = (values) => {
  const bullies = [];
  for (let i = 0; i < values.totalBullies; i++) {
    console.log(values);
    bullies.push({
      label: (
        <>
          <TranslationComponent keys={["firstname"]} school={schoolType} />
          <p className="summary-values">{values[`morebulliesFirstName${i}`]}</p>
          <TranslationComponent keys={["lastname"]} school={schoolType} />
          <p className="summary-values">{values[`morebulliesLastName${i}`]}</p>
          <TranslationComponent keys={["gender"]} school={schoolType} />
          <p className="summary-values">{values[`morebulliesGender${i}`]}</p>
          <TranslationComponent keys={["class"]} school={schoolType} />
          <p className="summary-values">{values[`morebulliesClass${i}`]}</p>
        </>
      ),
    });
  }
  return bullies;
};
