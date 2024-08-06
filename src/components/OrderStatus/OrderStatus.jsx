import { format } from "date-fns";
import CheckIcon from "../../assets/images/checkStatusIcon.svg?react";

import { StyledOrderStatus } from "./Styled";
import { translateStatus } from "src/utils/translateStatus";

const OrderStatus = ({ currentOrder }) => {
  // const translateStatus = (status) => {
  //   switch (status) {
  //     case "Created":
  //       return "Очікує на оплату";
  //     case "Payment Received":
  //       return "Оплачено";
  //     case "Processing":
  //       return "У процесі";
  //     case "Shipped":
  //       return "Відправлено";
  //     case "Delivered":
  //       return "Доставлено";
  //     case "Cancelled":
  //       return "Скасовано";

  //     default:
  //       break;
  //   }
  // };

  // console.log("translatedStatus-->", translateStatus());

  return (
    <StyledOrderStatus>
      <h3 className="orderStatusTitle">Статус замовлення</h3>
      <ul className="orderStatusList">
        {currentOrder?.statusHistory.map((status) => {
          return (
            <li className="orderStatusItem" key={status.date}>
              <div className="iconWrapper">
                <CheckIcon />
              </div>
              <p className="statusText">
                {translateStatus(status.status)}
                <span className="statusData">
                  {format(status.date, "dd.MM.yyyy")}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    </StyledOrderStatus>
  );
};

export default OrderStatus;
