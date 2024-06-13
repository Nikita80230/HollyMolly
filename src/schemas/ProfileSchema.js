import * as yup from "yup";

const nameRegex =
  /^(?=.{1,50}$)(?:[АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ]){1}[абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'’]*(?:(?:-[АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ]){1}[абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'’]*)*$/;
const specialCharsRegex = /[-'`’]{2}/;
const phoneRegex = /^\+[0-9]{12}$|^[0-9]{10}$/;

export const ProfileSchema = yup.object().shape({
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
    ),
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
    ),
  email: yup
    .string()
    .email("\u2716  Переконайтеся, що ви написали свою пошту вірно")
    .matches(
      /^[A-Za-z0-9-_.+]{1,50}@(?=.{4,50}$)[A-Za-z0-9][A-Za-z0-9-.]*\.[A-Za-z0-9]{2,}$/,
      "\u2716  Переконайтеся, що ви написали свою пошту вірно"
    )
    .required("\u2716 Це поле обов'язкове"),
  phoneNumber: yup
    .string()
    .matches(
      phoneRegex,
      "\u2716 Номер телефону повинен відповідати формату +00000-000-00-00"
    ),
   dateOfBirth: yup
    .date()
    .nullable()
    .typeError("\u2716 Введіть коректну дату")
    .required("\u2716 Це поле обов'язкове"),
  
});