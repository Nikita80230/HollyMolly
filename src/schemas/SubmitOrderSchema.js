import * as yup from "yup";

const nameRegex =
  /^(?=.{1,50}$)(?:[АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ]){1}[абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'’]*(?:(?:-[АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ]){1}[абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'’]*)*$/;
const specialCharsRegex = /[-'`’]{2}/;
const phoneRegex = /^\+[0-9]{12}$|^[0-9]{10}$/;

export const SubmitOrderSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(50, "\u2716 Ім'я повинне бути довжиною до 50 літер")
    .matches(
      nameRegex,
      " \u2716 Ім'я повинне починатись з великої літери українського алфавіту та містити малі літери українського алфавіту "
    )
    .test(
      "no-double-special-chars",
      "\u2716 Ім'я не може містити два спецсимволи підряд",
      (value) => !specialCharsRegex.test(value)
    )
    .required("Це поле обов'язкове"),
  lastName: yup
    .string()
    .max(50, "\u2716 Прізвище повинне бути довжиною до 50 літер")
    .matches(
      nameRegex,
      " \u2716 Прізвище повинне починатись з великої літери українського алфавіту та містити малі літери українського алфавіту "
    )
    .test(
      "no-double-special-chars",
      "\u2716 Прізвище не може містити два спецсимволи підряд",
      (value) => !specialCharsRegex.test(value)
    )
    .required("Це поле обов'язкове"),
  phoneNumber: yup
    .string()
    .matches(
      phoneRegex,
      "\u2716 Формат +00000-000-00-00"
    )
    .required("Це поле обов'язкове"),
  city: yup.string().required("Це поле обов'язкове"),
  deliveryAddress: yup.string().required("Це поле обов'язкове"),
});
