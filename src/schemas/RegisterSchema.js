import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  email: yup.string().matches(
      /^[A-Za-z0-9-_.+]{1,50}@(?=.{4,50}$)[A-Za-z0-9][A-Za-z0-9-.]*\.[A-Za-z0-9]{2,}$/,
      "Введіть вірний email"
    )
    .required("Це обов'язкове поле"),
  password: yup
    .string()
    .min(8, "Пароль повинен містити принаймні 8 символів")
    .max(25, "Пароль повинен містити не більше 25 символів")
    .matches(
      /^(?=.*[A-Za-z])[A-Za-z0-9~`!@#$%^&*()_\-+={[}\]|:;'<,>.?/]{8,25}$/,
      "Пароль повинен містити принаймні одну літеру та може включати цифри та деякі спеціальні символи"
    )
     .test('not-only-digits', 'Пароль не може бути лише з цифр', function(value) {
        return !/^\d+$/.test(value);
    })
    .required("Це обов'язкове поле"),
  confirmPassword: yup
    .string()
    .test("passwords-match", "Паролі мають співпадати", function (value) {
      return this.parent.password === value;
    }),
});
