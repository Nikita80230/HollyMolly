import { Link } from "react-router-dom";
import { StyledOrderMetaData } from "./Styled";
import { routes } from "src/routes";
import { format } from "date-fns";
import {
  statusesToColorsVocabulary,
  translateStatusVocabulary,
} from "src/utils/statuses";
import IconBack from "src/assets/images/back-mobile.svg?react";

const OrderMetaData = ({ currentOrder }) => {
  const date = currentOrder ? new Date(currentOrder.orderDate) : new Date();

  const formattedDate = format(date, "dd.MM.yyyy");

  if (!currentOrder) return;

  return (
    <StyledOrderMetaData>
      <div className="breadcrumbs">
        <Link to={routes.MOBILE_PROFILE} className="backButtonMobile">
          <IconBack className="icon" />
          Мої замовлення
        </Link>
        <Link to={routes.MY_ORDERS} className="backButton">
          Мої замовлення
        </Link>
        <span className="currentOrderNumber">
          Замовлення №{currentOrder.id}
        </span>
      </div>
      <div className="orderTitleWrapper">
        <div>
          <h2 className="orderTitle">Замовлення №{currentOrder.id}</h2>
          <span className="orderDate">{formattedDate}</span>
        </div>

        <span
          className="orderStatus"
          style={{
            background: statusesToColorsVocabulary[currentOrder.status],
          }}
        >
          {translateStatusVocabulary[currentOrder.status]}
        </span>
      </div>
    </StyledOrderMetaData>
  );
};

export default OrderMetaData;
