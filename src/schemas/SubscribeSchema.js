import * as yup from "yup";

export const SubscribeSchema = yup.object().shape({
  email: yup
    .string()
    .email("\u2716  Переконайтеся, що ви написали свою пошту вірно")
    .required(" \u2716 Це обов'язкове поле")
   
    // .test("valid-email", "\u2714 Твоя підписка вже активна", function (value) {
    //   return /^[A-Za-z0-9-_.+]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value);
    // }),
});
