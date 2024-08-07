import OrderInstance from "../OrderInstance/OrderInstance";
import { StyleOrderInstancesList } from "./Styled";

const OrderInstancesList = ({ currentOrder }) => {
  console.log(currentOrder);
  return (
    <StyleOrderInstancesList>
      <ul className="ordersList">
        {Array.isArray(currentOrder?.orderRecords) &&
          currentOrder.orderRecords.map((instance) => {
            return (
              <OrderInstance
                key={instance.productInstanceId}
                instance={instance}
              />
            );
          })}
      </ul>
      <div className="sumWrapper">
        <span className="sumText">Загальна сума</span>
        <span className="sumQuantity">{currentOrder?.totalCost}₴</span>
      </div>
    </StyleOrderInstancesList>
  );
};

export default OrderInstancesList;
