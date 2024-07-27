import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .email("\u2716 Невірно вказано email")
    .matches(
      /^[A-Za-z0-9-_.+]{1,50}@(?=.{4,50}$)[A-Za-z0-9][A-Za-z0-9-.]*\.[A-Za-z0-9]{2,}$/,
      "\u2716  Невірно вказано email"
    )
    .required("Це поле є обов'язковим"),
  password: yup
    .string()
    .min(8, "\u2716 Мінімум 8 символів")
    .max(25, "\u2716 Не більше 25 символів")
    .matches(
      /^[A-Za-z0-9~`!@#$%^&*()_\-+={[}\]|:;'<,>.?/]*$/,
      "\u2716 Лише латинські літери, цифри або символи"
    )
    .test(
      "not-only-digits",
      "\u2716  Пароль не може бути лише з цифр",
      function (value) {
        return !/^\d+$/.test(value);
      }
    )
    .required("\u2716 Це поле є обов'язковим"),
  confirmPassword: yup
    .string()
    .test(
      "passwords-match",
      "\u2716  Паролі мають співпадати",
      function (value) {
        return this.parent.password === value;
      }
    ),
});
