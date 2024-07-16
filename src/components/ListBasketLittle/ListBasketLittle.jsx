import { useDispatch } from "react-redux";
import { updateProduct } from "src/redux/basket/basketSlice";
import BasketCardLittle from "../BasketCardLittle/BasketCardLittle";
import { StyledListBasket } from "./Styled";

const ListBasketLittle = ({ productBasket }) => {
  const dispatch = useDispatch();

  const handleClickAddCount = (productId) => {
    const product = productBasket.find(
      (p) => p.productInstanceId === productId
    );
    if (product) {
      dispatch(
        updateProduct({
          productInstanceId: productId,
          quantity: product.quantity + 1,
        })
      );
    }
  };

  const handleClickCount = (productId) => {
    const product = productBasket.find(
      (p) => p.productInstanceId === productId
    );
    if (product && product.quantity > 1) {
      dispatch(
        updateProduct({
          productInstanceId: productId,
          quantity: product.quantity - 1,
        })
      );
    }
  };
  return (
    <StyledListBasket>
      {productBasket.map((product) => (
        <BasketCardLittle
          product={product}
          key={product.productInstanceId}
          handleClickCount={() => handleClickCount(product.productInstanceId)}
          handleClickAddCount={() =>
            handleClickAddCount(product.productInstanceId)
          }
        />
      ))}
    </StyledListBasket>
  );
};

export default ListBasketLittle;
