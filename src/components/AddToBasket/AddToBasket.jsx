import { useDispatch, useSelector } from "react-redux";
import BasketIcon from "src/assets/images/basketBlue.svg?react";
import {
  addProductsToBasket,
  selectBasketProducts,
} from "src/redux/products/productsSlice";
import { ButtonAddToBasket } from "./Styled";

const AddToBasket = ({ product, selectedProductInstance }) => {
  const basketProducts = useSelector(selectBasketProducts);

  const dispatch = useDispatch();

  const isProductInBasket =
    selectedProductInstance &&
    basketProducts.some(
      (basketProduct) =>
        basketProduct.productId === product.id &&
        basketProduct.productInstanceId === selectedProductInstance.id
    );

  const handleAddToBasket = () => {
    if (selectedProductInstance) {
      const basketProduct = {
        productId: product.id,
        productName: product.name,
        productInstanceId: selectedProductInstance.id,
        ...selectedProductInstance,
      };

      dispatch(addProductsToBasket(basketProduct));
    }
  };
  return (
    <ButtonAddToBasket
      disabled={!selectedProductInstance || isProductInBasket}
      onClick={handleAddToBasket}
    >
      <BasketIcon
        className={`iconBasket ${isProductInBasket ? "added" : ""} `}
      />
    </ButtonAddToBasket>
  );
};
export default AddToBasket;
