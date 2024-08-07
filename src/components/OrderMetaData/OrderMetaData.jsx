import { Link } from "react-router-dom";
import { StyledOrderMetaData } from "./Styled";
import { routes } from "src/routes";
import { format } from "date-fns";
import { translateStatus } from "src/utils/translateStatus";

const OrderMetaData = ({ currentOrder }) => {
  console.log("current order from order details-->", currentOrder);

  const date = currentOrder ? new Date(currentOrder.orderDate) : new Date();

  const formattedDate = format(date, "dd.MM.yyyy");

  if (!currentOrder) return;

  return (
    <StyledOrderMetaData>
      <div className="breadcrumbs">
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

        <span className="orderStatus">
          {translateStatus(currentOrder.status)}
        </span>
      </div>
    </StyledOrderMetaData>
  );
};

export default OrderMetaData;
