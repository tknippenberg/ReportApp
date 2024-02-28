import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  whatHappened: Yup.string()
    .test(
      "wordCount",
      "Please write at least 5 words",
      (value) => value.trim().split(/\s+/).length >= 5
    )
    .required("Please Write at least 5 words"),
  date: Yup.string().required("Date is required"),
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  role: Yup.string().required("Role is required"),
  gender: Yup.string().required("Gender is required"),
  email_address: Yup.string()
    .email("Enter a valid email address")
    .required("Email Address is required"),
  // Below are the 3 rules that I need to add dynamically
  // victimFirstName: Yup.string().required("First Name is required"),
  // victimLastName: Yup.string().required("Last Name is required"),
  // victimGender: Yup.string().required("Gender is required"),
  bullyFirstName: Yup.string().required("First Name is required"),
  bullyLastName: Yup.string().required("Last Name is required"),
  bullyGender: Yup.string().required("Gender is required"),

  victims: Yup.array().of(
    Yup.object().shape({
      morevictimFirstName: Yup.string().required("First name is required"),
      morevictimLastName: Yup.string().required("Last name is required"),
      morevictimGender: Yup.string().required("Gender is required"),
    })
  ),

  bullies: Yup.array().of(
    Yup.object().shape({
      morebulliesFirstName: Yup.string().required("First name is required"),
      morebulliesLastName: Yup.string().required("Last name is required"),
      morebulliesGender: Yup.string().required("Gender is required"),
    })
  ),

  someoneElseFields: Yup.array().of(
    Yup.object().shape({
      victimFirstName: Yup.string().required("First Name is required"),
      victimLastName: Yup.string().required("Last Name is required"),
      victimGender: Yup.string().required("Gender is required"),
    })
  ),
});
