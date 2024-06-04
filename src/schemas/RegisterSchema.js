import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  email: yup
    .string()
     .email("\u2716  Переконайтеся, що ви написали свою пошту вірно")
    .matches(
      /^[A-Za-z0-9-_.+]{1,50}@(?=.{4,50}$)[A-Za-z0-9][A-Za-z0-9-.]*\.[A-Za-z0-9]{2,}$/,
      "\u2716  Переконайтеся, що ви написали свою пошту вірно"
    )
    .required(""),
  password: yup
    .string()
    .min(8, "\u2716 Пароль повинен містити принаймні 8 символів")
    .max(25, "\u2716 Пароль повинен містити не більше 25 символів")
    .matches(
      /^(?=.*[A-Za-z])[A-Za-z0-9~`!@#$%^&*()_\-+={[}\]|:;'<,>.?/]{8,25}$/,
      "\u2716  Пароль повинен містити принаймні одну літеру"
    )
     .test('not-only-digits', '\u2716  Пароль не може бути лише з цифр', function(value) {
        return !/^\d+$/.test(value);
    })
    .required(""),
  confirmPassword: yup
    .string()
    .test("passwords-match", "\u2716  Паролі мають співпадати", function (value) {
      return this.parent.password === value;
    }),
});
