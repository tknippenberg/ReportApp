import * as Yup from "yup";
import TranslationComponent from "../TranslationComponent";

export const validationSchema = Yup.object().shape({
  whatHappened: Yup.string()
    .test(
      "wordCount",
      <TranslationComponent
        keys={["validation_min_5_words"]}
        school="basisschool"
        className="inline"
      />,
      (value) => value.trim().split(/\s+/).length >= 5
    )
    .required(
      <TranslationComponent
        keys={["validation_min_5_words"]}
        school="basisschool"
        className="inline"
      />
    ),
  date: Yup.string().required(
    <TranslationComponent
      keys={["validation_date"]}
      school="basisschool"
      className="inline"
    />
  ),
  firstname: Yup.string().required(
    <TranslationComponent
      keys={["validation_first_name"]}
      school="basisschool"
      className="inline"
    />
  ),
  lastname: Yup.string().required(
    <TranslationComponent
      keys={["validation_last_name"]}
      school="basisschool"
      className="inline"
    />
  ),
  role: Yup.string().required(
    <TranslationComponent
      keys={["validation_role"]}
      school="basisschool"
      className="inline"
    />
  ),
  gender: Yup.string().required(
    <TranslationComponent
      keys={["validation_gender"]}
      school="basisschool"
      className="inline"
    />
  ),
  email_address: Yup.string()
    .email("Gelieve een geldig e-mailadres in te vullen")
    .required(
      <TranslationComponent
        keys={["validation_email_address"]}
        school="basisschool"
        className="inline"
      />
    ),
  bullyFirstName: Yup.string().required(
    <TranslationComponent
      keys={["validation_first_name"]}
      school="basisschool"
      className="inline"
    />
  ),
  bullyLastName: Yup.string().required(
    <TranslationComponent
      keys={["validation_last_name"]}
      school="basisschool"
      className="inline"
    />
  ),
  bullyGender: Yup.string().required(
    <TranslationComponent
      keys={["validation_gender"]}
      school="basisschool"
      className="inline"
    />
  ),

  victims: Yup.array().of(
    Yup.object().shape({
      morevictimFirstName: Yup.string().required(
        <TranslationComponent
          keys={["validation_first_name"]}
          school="basisschool"
          className="inline"
        />
      ),
      morevictimLastName: Yup.string().required(
        <TranslationComponent
          keys={["validation_last_name"]}
          school="basisschool"
          className="inline"
        />
      ),
      morevictimGender: Yup.string().required(
        <TranslationComponent
          keys={["validation_gender"]}
          school="basisschool"
          className="inline"
        />
      ),
    })
  ),

  bullies: Yup.array().of(
    Yup.object().shape({
      morebulliesFirstName: Yup.string().required(
        <TranslationComponent
          keys={["validation_first_name"]}
          school="basisschool"
          className="inline"
        />
      ),
      morebulliesLastName: Yup.string().required(
        <TranslationComponent
          keys={["validation_last_name"]}
          school="basisschool"
          className="inline"
        />
      ),
      morebulliesGender: Yup.string().required(
        <TranslationComponent
          keys={["validation_gender"]}
          school="basisschool"
          className="inline"
        />
      ),
    })
  ),

  someoneElseFields: Yup.array().of(
    Yup.object().shape({
      victimFirstName: Yup.string().required(
        <TranslationComponent
          keys={["validation_first_name"]}
          school="basisschool"
          className="inline"
        />
      ),
      victimLastName: Yup.string().required(
        <TranslationComponent
          keys={["validation_first_name"]}
          school="basisschool"
          className="inline"
        />
      ),
      victimGender: Yup.string().required(
        <TranslationComponent
          keys={["validation_gender"]}
          school="basisschool"
          className="inline"
        />
      ),
    })
  ),
});
