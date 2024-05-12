import * as yup from "yup";

export const SubscribeSchema = yup.object().shape({
  email: yup
    .string()
    .email("\u2716  Переконайтеся, що ви написали свою пошту вірно")
    .required(" \u2716  Це обов'язкове поле")
   
});
