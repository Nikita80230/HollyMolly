import * as yup from "yup";

export const SubscribeSchema = yup.object().shape({
  email: yup
    .string()
     .email("\u2716  Переконайтеся, що ви написали свою пошту вірно")
    .matches(
      /^[A-Za-z0-9-_.+]{1,50}@(?=.{4,50}$)[A-Za-z0-9][A-Za-z0-9-.]*\.[A-Za-z0-9]{2,}$/,
      "\u2716  Переконайтеся, що ви написали свою пошту вірно"
    )
    .required(""),
});
