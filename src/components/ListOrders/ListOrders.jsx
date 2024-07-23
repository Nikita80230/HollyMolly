import { parseISO } from "date-fns";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectMyOrders } from "src/redux/orders/selectors";
import { StyledListOrders } from "./Styled";

const ListOrders = () => {
  const orders = useSelector(selectMyOrders);

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
                <div className="wrapperStatus" style={{background: "100503"}}>
                 
                    <span className="spanStatus" >{order.status}</span>
                 
                </div> )}
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
