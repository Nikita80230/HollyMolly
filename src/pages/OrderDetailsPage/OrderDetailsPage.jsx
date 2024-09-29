import { StyledOrderDetailsPage } from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMyOrders } from "src/redux/orders/selectors";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMyOrders } from "src/redux/orders/operations";
import OrderMetaData from "src/components/OrderMetaData/OrderMetaData";
import OrderInstancesList from "src/components/OrderInstancesList/OrderInstancesList";
import OrderStatus from "src/components/OrderStatus/OrderStatus";
import OrderDeliveryAddress from "src/components/OrderDeliveryAddress/OrderDeliveryAddress";

const OrderDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allOrders = useSelector(selectMyOrders);

  const [currentOrder, setCurrentOrder] = useState(null);

  useEffect(() => {
    if (allOrders.length === 0) return;

    const currentOrder = allOrders.find((order) => order.id.toString() === id);
    setCurrentOrder(currentOrder);
  }, [allOrders, id]);

  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);

  return (
    <StyledOrderDetailsPage>
      <OrderMetaData currentOrder={currentOrder} />

      <OrderInstancesList currentOrder={currentOrder} />
      <div className="statusAndDeliveryContainer">
        <OrderStatus currentOrder={currentOrder} />
        <OrderDeliveryAddress currentOrder={currentOrder} />
      </div>
    </StyledOrderDetailsPage>
  );
};

export default OrderDetailsPage;
