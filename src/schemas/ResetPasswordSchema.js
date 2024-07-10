import * as yup from "yup";

export const ResetPasswordSchema = yup.object().shape({
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
    .required("Це поле є обов'язковим"),
});