import * as Yup from "yup";

export const signUpValidation = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
});

export const signUpEmailError = "email must be a valid email";
