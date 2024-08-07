export const translateStatus = (status) => {
  switch (status) {
    case "Created":
      return "Очікує на оплату";
    case "Payment Received":
      return "Оплачено";
    case "Processing":
      return "У процесі";
    case "Shipped":
      return "Відправлено";
    case "Delivered":
      return "Доставлено";
    case "Cancelled":
      return "Скасовано";

    default:
      break;
  }
};
