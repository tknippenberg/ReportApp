import * as Yup from "yup";
import TranslationComponent from "../TranslationComponent";

const schoolType = localStorage.getItem("schoolType");

export const validationSchema = Yup.object().shape({
  whatHappened: Yup.string()
    .test(
      "wordCount",
      <TranslationComponent
        keys={["validation_min_5_words"]}
        school={schoolType}
        className="inline"
      />,
      (value) => value.trim().split(/\s+/).length >= 5
    )
    .required(
      <TranslationComponent
        keys={["validation_min_5_words"]}
        school={schoolType}
        className="inline"
      />
    ),
  date: Yup.string().required(
    <TranslationComponent
      keys={["validation_date"]}
      school={schoolType}
      className="inline"
    />
  ),
  firstname: Yup.string().required(
    <TranslationComponent
      keys={["validation_first_name"]}
      school={schoolType}
      className="inline"
    />
  ),
  lastname: Yup.string().required(
    <TranslationComponent
      keys={["validation_last_name"]}
      school={schoolType}
      className="inline"
    />
  ),
  role: Yup.string().required(
    <TranslationComponent
      keys={["validation_role"]}
      school={schoolType}
      className="inline"
    />
  ),
  gender: Yup.string().required(
    <TranslationComponent
      keys={["validation_gender"]}
      school={schoolType}
      className="inline"
    />
  ),
  email_address: Yup.string()
    .email("Gelieve een geldig e-mailadres in te vullen")
    .required(
      <TranslationComponent
        keys={["validation_email_address"]}
        school={schoolType}
        className="inline"
      />
    ),
  bullyFirstName: Yup.string().required(
    <TranslationComponent
      keys={["validation_first_name"]}
      school={schoolType}
      className="inline"
    />
  ),
  bullyLastName: Yup.string().required(
    <TranslationComponent
      keys={["validation_last_name"]}
      school={schoolType}
      className="inline"
    />
  ),
  bullyGender: Yup.string().required(
    <TranslationComponent
      keys={["validation_gender"]}
      school={schoolType}
      className="inline"
    />
  ),

  victims: Yup.array().of(
    Yup.object().shape({
      morevictimFirstName: Yup.string().required(
        <TranslationComponent
          keys={["validation_first_name"]}
          school={schoolType}
          className="inline"
        />
      ),
      morevictimLastName: Yup.string().required(
        <TranslationComponent
          keys={["validation_last_name"]}
          school={schoolType}
          className="inline"
        />
      ),
      morevictimGender: Yup.string().required(
        <TranslationComponent
          keys={["validation_gender"]}
          school={schoolType}
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
          school={schoolType}
          className="inline"
        />
      ),
      morebulliesLastName: Yup.string().required(
        <TranslationComponent
          keys={["validation_last_name"]}
          school={schoolType}
          className="inline"
        />
      ),
      morebulliesGender: Yup.string().required(
        <TranslationComponent
          keys={["validation_gender"]}
          school={schoolType}
          className="inline"
        />
      ),
    })
  ),
});
