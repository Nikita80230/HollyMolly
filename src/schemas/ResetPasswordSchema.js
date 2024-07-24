import * as yup from "yup";

export const ResetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "\u2716 Мінімум 8 символів")
    .max(25, "\u2716 Не більше 25 символів")
    .matches(
      /^[A-Za-z0-9~`!@#$%^&*()_\-+={[}\]|:;'<,>.?/]*$/,
      "\u2716  Пароль може містити лише літери, цифри або наступні символи ~`!@#$%^&*()_-+={[}]|:;'<,>.?/"
    )
    .test(
      "not-only-digits",
      "\u2716  Пароль не може бути лише з цифр",
      function (value) {
        return !/^\d+$/.test(value);
      }
    )
    .required("Це поле є обов'язковим"),
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
