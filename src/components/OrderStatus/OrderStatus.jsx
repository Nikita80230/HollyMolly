import { format } from "date-fns";
import CheckIcon from "../../assets/images/checkStatusIcon.svg?react";

import { StyledOrderStatus } from "./Styled";
import { translateStatusVocabulary } from "src/utils/statuses";

const OrderStatus = ({ currentOrder }) => {
  return (
    <StyledOrderStatus>
      <h3 className="orderStatusTitle">Статус замовлення</h3>
      <ul className="orderStatusList">
        {currentOrder?.statusHistory.map((status) => {
          return (
            <li className="orderStatusItem" key={status.date}>
              <div className="iconWrapper">
                <CheckIcon className="icon" />
              </div>
              <p className="statusText">
                {translateStatusVocabulary[status.status]}
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
