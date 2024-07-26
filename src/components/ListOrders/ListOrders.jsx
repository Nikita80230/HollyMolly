import { parseISO } from "date-fns";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectMyOrders } from "src/redux/orders/selectors";
import { StyledListOrders } from "./Styled";

const ListOrders = () => {
  const orders = useSelector(selectMyOrders);
  console.log(orders);
  return (
    <>
      {!orders.length ? (
        <h1>У вас ще нема замовлень</h1>
      ) : (
        <StyledListOrders>
          {orders.map((order) => (
            <li key={order.id} className="orderItem">
              <div className="containerSpans">
                <span className="orderNumber">Замовлення № {order.id}</span>
                {order.status === "Created" && (
                  <div
                    className="wrapperStatus"
                    style={{ background: "#fff6e7" }}
                  >
                    <span className="spanStatus">Очікує оплату</span>
                  </div>
                )}
                {order.status === "Payment Received" && (
                  <div
                    className="wrapperStatus"
                    style={{ background: "#e2edf4" }}
                  >
                    <span className="spanStatus">Сплачено</span>
                  </div>
                )}
              </div>
              <span className="date">
                {format(parseISO(order.orderDate), "dd.MM.yyyy")}
              </span>
              <div className="containerSpans">
                <span className="price">
                  Загальна сума: {order.totalCost} ₴
                </span>
                <Link className="link">Деталі замовлення</Link>
              </div>
            </li>
          ))}
        </StyledListOrders>
      )}
    </>
  );
};

export default ListOrders;
