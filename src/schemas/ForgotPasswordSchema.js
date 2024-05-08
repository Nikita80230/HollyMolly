import * as yup from "yup";

export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[A-Za-z0-9-_.+]{1,50}@(?=.{4,50}$)[A-Za-z0-9][A-Za-z0-9-.]*\.[A-Za-z0-9]{2,}$/,
      "Введіть вірний email"
    )
    .required("Це обов'язкове поле"),
});