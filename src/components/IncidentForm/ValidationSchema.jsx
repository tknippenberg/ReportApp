import * as Yup from "yup";
import TranslationComponent from "../TranslationComponent";

const schoolType = localStorage.getItem("schoolType");

export const validationSchema = Yup.object().shape({
  LocationId: Yup.string().required("Locatie is vereist"),
  IncidentDescription: Yup.string()
    .test(
      "wordCount",
      <TranslationComponent
        keys={["validation_min_5_words"]}
        school={schoolType}
        className="inline"
      />,
      (value) => value.trim().split(/\s+/).length >= 5
    )
    .test(
      "wordCount",
      <TranslationComponent
        keys={["validation_max_500_words"]}
        school={schoolType}
        className="inline"
      />,
      (value) => value.trim().split(/\s+/).length <= 500
    )
    .required(
      <TranslationComponent
        keys={["validation_min_5_words"]}
        school={schoolType}
        className="inline"
      />
    ),
  IncidentDate: Yup.string().required(
    <TranslationComponent
      keys={["validation_date"]}
      school={schoolType}
      className="inline"
    />
  ),
  Notifier: Yup.object().shape({
    Firstname: Yup.string().required(
      <TranslationComponent
        keys={["validation_first_name"]}
        school={schoolType}
        className="inline"
      />
    ),
    Lastname: Yup.string().required(
      <TranslationComponent
        keys={["validation_last_name"]}
        school={schoolType}
        className="inline"
      />
    ),
    Role: Yup.string().required(
      <TranslationComponent
        keys={["validation_role"]}
        school={schoolType}
        className="inline"
      />
    ),
    Gender: Yup.string().required(
      <TranslationComponent
        keys={["validation_gender"]}
        school={schoolType}
        className="inline"
      />
    ),
    Emailaddress: Yup.string()
      .email("Gelieve een geldig e-mailadres in te vullen")
      .required(
        <TranslationComponent
          keys={["validation_email_address"]}
          school={schoolType}
          className="inline"
        />
      ),

    // Group: Yup.string().required("Klasse is vereist"),
  }),

  Victims: Yup.array().of(
    Yup.object().shape({
      Firstname: Yup.string().required(
        <TranslationComponent
          keys={["validation_first_name"]}
          school={schoolType}
          className="inline"
        />
      ),
      Lastname: Yup.string().required(
        <TranslationComponent
          keys={["validation_last_name"]}
          school={schoolType}
          className="inline"
        />
      ),
      Gender: Yup.string().required(
        <TranslationComponent
          keys={["validation_gender"]}
          school={schoolType}
          className="inline"
        />
      ),
      // Group: Yup.string().required("Klasse is vereist"),
    })
  ),
  // .min(
  //   1,
  //   // <TranslationComponent
  //   //   keys={["validation_minimum_1_bully"]}
  //   //   school={schoolType}
  //   //   className="inline"
  //   // />
  //   "Please Selec"
  // ),

  Bullies: Yup.array()
    .of(
      Yup.object().shape({
        Firstname: Yup.string().required(
          <TranslationComponent
            keys={["validation_first_name"]}
            school={schoolType}
            className="inline"
          />
        ),
        Lastname: Yup.string().required(
          <TranslationComponent
            keys={["validation_last_name"]}
            school={schoolType}
            className="inline"
          />
        ),
        Gender: Yup.string().required(
          <TranslationComponent
            keys={["validation_gender"]}
            school={schoolType}
            className="inline"
          />
        ),
        Group: Yup.string().required("Klasse is vereist"),
      })
    )
    .min(
      1,
      <TranslationComponent
        keys={["validation_minimum_1_bully"]}
        school={schoolType}
        className="inline"
      />
      // "Add At Least 1 Bully"
    ),
});
