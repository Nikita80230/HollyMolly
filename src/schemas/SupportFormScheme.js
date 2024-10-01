import * as yup from "yup";

const nameRegex =
  /^(?=.{1,50}$)(?:[АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ]){1}[абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'’]*(?:(?:-[АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ]){1}[абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'’]*)*$/;
const specialCharsRegex = /[-'`’]{2}/;
const phoneRegex = /^\+[0-9]{12}$|^[0-9]{10}$/;

export const SupportFormSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, "\u2716 Масимум 50 літер")
    .matches(nameRegex, " \u2716  Лише з великої літери кирилиці ")
    .test(
      "no-double-special-chars",
      "\u2716 Не може бути два спецсимволи підряд",
      (value) => !specialCharsRegex.test(value)
    )
    .required("\u2716 Ім'я обов'язкове"),

  email: yup
    .string()
    .email("\u2716 Невірно вказано email")
    .matches(
      /^[A-Za-z0-9-_.+]{1,50}@(?=.{4,50}$)[A-Za-z0-9][A-Za-z0-9-.]*\.[A-Za-z0-9]{2,}$/,
      "\u2716  Невірно вказано email"
    )
    .required("\u2716 Email обов'язковий"),
  orderId: yup
    .string()
    .matches(/^[0-9]+$/, "\u2716 Лише цифри дозволені")
    .required("\u2716 Номер замовлення обов'язковий")
    .min(1, "\u2716 Мінімум 1 цифра"),
  theme: yup
    .string()
    .oneOf(
      ["accountIssues", "productQuestions", "paymentQuestions", "other"],
      "\u2716 Виберіть коректну тему"
    )
    .required("\u2716 Тема є обов'язковою"),

  description: yup
    .string()
    .required("\u2716 Опис є обов'язковим")
    .min(10, "\u2716  Мінімум 10 символів"),
});
