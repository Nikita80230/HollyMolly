import * as yup from "yup";

export const ResetPasswordSchema = yup.object().shape({
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
});