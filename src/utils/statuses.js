import { theme } from "src/styles/theme";

export const translateStatusVocabulary = {
  Created: "Очікує оплату",
  "Payment Received": "Cплачено",
  Processing: "У процесі",
  Shipped: "Відправлено",
  Delivered: "Доставлено",
  Cancelled: "Скасовано",
};

export const statusesToColorsVocabulary = {
  Created: theme.colors.secondaryBgColor,
  "Payment Received": theme.colors.colorBgSpanRating,
  Processing: theme.colors.colorBgSpanDiscount,
  Shipped: theme.colors.colorBgSpanRating,
  Delivered: theme.colors.colorBgSpanDiscount,
  Cancelled: theme.colors.whiteTxtColor,
};
