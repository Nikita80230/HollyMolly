import { Link } from "react-router-dom";
import { StyledOrderDetails } from "./Styled";
import { routes } from "src/routes";
import { format } from "date-fns";
// import { translateStatus } from "src/utils/translateStatus";

const OrderDetails = ({ currentOrder }) => {
  console.log("current order from order details-->", currentOrder);

  const date = currentOrder ? new Date(currentOrder.orderDate) : new Date();

  const formattedDate = format(date, "dd.MM.yyyy");

  if (!currentOrder) return;

  return (
    <StyledOrderDetails>
      <div className="breadcrumbs">
        <Link to={routes.MY_ORDERS} className="backButton">
          Мої замовлення
        </Link>
        <span className="currentOrderNumber">
          Замовлення №{currentOrder.id}
        </span>
      </div>
      <div className="orderTitleWrapper">
        <h2 className="orderTitle">Замовлення №{currentOrder.id}</h2>
        <span className="orderDate">{formattedDate}</span>
        <span className="orderStatus">
          {/* {translateStatus(currentOrder.status)} */}
        </span>
      </div>
    </StyledOrderDetails>
  );
};

export default OrderDetails;
