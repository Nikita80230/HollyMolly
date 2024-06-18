import { useSelector } from "react-redux";
import {
  selectAmountOrder,
  selectBasketProducts,
} from "src/redux/products/productsSlice";

const OrderCard = () => {
  const basketProducts = useSelector(selectBasketProducts);

  const amountOrder = useSelector(selectAmountOrder);

  return (
    <>
      <ul>
        {basketProducts.map(
          ({ productInstanceId, productName, quantity, totalPrice }) => (
            <li key={productInstanceId}>
              <h4>{productName}</h4>
              <p>{quantity}</p>
              <p>{totalPrice}</p>
            </li>
          )
        )}
      </ul>
      <p>Загальна сума: {amountOrder}</p>
    </>
  );
};

export default OrderCard;
