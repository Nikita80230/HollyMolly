import { BasketItem } from "./Styled";
import IconMinus from "src/assets/images/minus.svg?react";
import IconPlus from "src/assets/images/plus.svg?react";

const BasketCardLittle = ({
  product,
  handleClickCount,
  handleClickAddCount,
}) => {
  
  const {
    productName,
    productImage,
    productInstanceId,
    size,
    totalPrice,
    quantity,
    colorBorder,
  } = product;
  return (
    <BasketItem key={productInstanceId} $borderColor={colorBorder}>
      <img src={productImage} alt="product image" className="image" />
      <div className="wrapperContent">
        <span className="productName">{productName}</span>
        <span className="spanId">ID {productInstanceId}</span>
        <span className="spanSize">Розмір: {size}</span>
        <div className="containerCounterPrice">
          <div className="wrapperCounter">
            <button
              type="button"
              className="buttonCount"
              onClick={handleClickCount}
            >
              <IconMinus className="icon" />
            </button>
            <span className="countQuantity">{quantity}</span>
            <button
              type="button"
              className="buttonCount"
              onClick={handleClickAddCount}
            >
              <IconPlus className="icon" />
            </button>
          </div>
          <span className="spanTotalPrice">{totalPrice}₴</span>
        </div>
      </div>
    </BasketItem>
  );
};

export default BasketCardLittle;
