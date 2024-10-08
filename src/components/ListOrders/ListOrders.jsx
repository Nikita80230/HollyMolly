import { parseISO } from "date-fns";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { StyledListOrders } from "./Styled";
import { routes } from "src/routes";
import IconArrow from "src/assets/arrow-right-mobile.svg?react";
import { useEffect, useState } from "react";

const ListOrders = ({ orders }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 564);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 564);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {!orders.length ? (
        <p>У вас ще нема замовлень</p>
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
                 {order.status === "Processing" && (
                  <div
                    className="wrapperStatus"
                    style={{ background: "#eff9f1" }}
                  >
                    <span className="spanStatus">У процесі</span>
                  </div>
                )}
                 {order.status === "Shipped" && (
                  <div
                    className="wrapperStatus"
                    style={{ background: "#e2edf4" }}
                  >
                    <span className="spanStatus">Відправлено</span>
                  </div>
                )}
                 {order.status === "Delivered" && (
                  <div
                    className="wrapperStatus"
                    style={{ background: " #eff9f1" }}
                  >
                    <span className="spanStatus">Доставлено</span>
                  </div>
                )}
                 {order.status === "Cancelled" && (
                  <div
                    className="wrapperStatus"
                    style={{ background: "#c4c4c4" }}
                  >
                    <span className="spanStatus">Скасовано</span>
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
                {!isMobile ? (
                  <Link
                    className="detailsButton link"
                    to={`${routes.ORDER_DETAILS}/${order.id}`}
                  >
                    <span className="spanDetails">Деталі замовлення</span>
                    {/* <IconArrow className="iconDetails" /> */}
                  </Link>
                ) : (
                  <Link
                    className="detailsButton link"
                    to={`${routes.MOBILE_ORDER_DETAILS}/${order.id}`}
                  >
                    <IconArrow className="iconDetails" />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </StyledListOrders>
      )}
    </>
  );
};

export default ListOrders;
