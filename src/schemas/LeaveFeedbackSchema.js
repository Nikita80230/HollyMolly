import * as yup from "yup";

const nameRegex =
  /^(?=.{1,50}$)(?:[АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ]){1}[абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'’]*(?:(?:-[АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ]){1}[абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'’]*)*$/;
const specialCharsRegex = /[-'`’]{2}/; 

export const LeaveFeedbackSchema = yup.object().shape({
  authorName: yup
    .string()
     .required("\u2716 Ім`я є обов'язковим")
    .max(50, "\u2716 Максимум 50 літер")
    .matches(
      nameRegex,
      " \u2716 Лише з великої літери кирилиці "
    )
    .test(
      "no-double-special-chars",
      "\u2716 Не може бути два спецсимволи підряд",
      (value) => !specialCharsRegex.test(value)
    ),
  review: yup.string()
    .required("\u2716 Відгук є обов'язковим")
    .min(10, "\u2716  Мінімум 10 символів"),
  rating: yup.number()
    .required("\u2716 Рейтинг є обов'язковим")
    .min(1, "\u2716 Рейтинг від 1 до 5")
    .max(5, "\u2716 Рейтинг від 1 до 5"),
});
