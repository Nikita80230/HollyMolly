import * as yup from "yup";

const nameRegex =
  /^(?=.{1,50}$)(?:[АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ]){1}[абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'’]*(?:(?:-[АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ]){1}[абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'’]*)*$/;
const specialCharsRegex = /[-'`’]{2}/;
const phoneRegex = /^\+[0-9]{12}$|^[0-9]{10}$/;

export const SubmitOrderSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(50, "\u2716 Масимум 50 літер")
    .matches(
      nameRegex,
      " \u2716  Лише з великої літери кирилиці "
    )
    .test(
      "no-double-special-chars",
      "\u2716 Не може бути два спецсимволи підряд",
      (value) => !specialCharsRegex.test(value)
    )
    .required("\u2716 Це поле обов'язкове"),
  lastName: yup
    .string()
    .max(50, "\u2716 Максимум 50 літер")
    .matches(
      nameRegex,
      " \u2716  Лише з великої літери кирилиці "
    )
    .test(
      "no-double-special-chars",
      "\u2716 Не може бути два спецсимволи підряд",
      (value) => !specialCharsRegex.test(value)
    )
    .required("\u2716 Це поле обов'язкове"),
  phoneNumber: yup
    .string()
    .matches(
      phoneRegex,
      "\u2716 Формат +03800-000-00-00"
    )
    .required("\u2716 Це поле обов'язкове"),
  city: yup.string().required("\u2716 Це поле обов'язкове"),
  deliveryAddress: yup.string().required("\u2716 Це поле обов'язкове"),
});
