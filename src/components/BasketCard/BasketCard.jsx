import { useDispatch, useSelector } from "react-redux";
import { BasketItem } from "./Styled";
// import { selectBasketProducts } from "src/redux/products/productsSlice";
import defaultPhoto from "src/assets/images/defaultImg.webp";
import TrashIcon from "src/assets/images/trash.svg?react";
import colorTranslations from "src/utils/colorTranslations";
import IconMinus from "src/assets/images/minus.svg?react";
import IconPlus from "src/assets/images/plus.svg?react";
import { deleteProduct } from "src/redux/basket/basketSlice";

const BasketCard = ({ product, handleClickCount, handleClickAddCount }) => {
  const dispatch = useDispatch();
  const {
    productInstanceId,
    productName,
    color,
    productImage,
    priceAfterDiscount,
    stockQuantity,
    quantity,
    size,
    totalPrice,
  } = product;

  const translatedColor = colorTranslations[color] || color;

  const handleClick = () => {
    dispatch(deleteProduct({ productInstanceId }));
  };

  return (
    <BasketItem key={productInstanceId}>
      <div className="wrapperCardBasket">
        {/* <div className="wrapperPhoto"> */}
        <img src={productImage} alt={productName} className="basketPhoto" />
        {/* </div> */}
        <div className="wrapperBox">
          <div className="boxNameDelete">
            <h3 className="nameProduct">{productName}</h3>
            <button className="buttonTrash" onClick={handleClick}>
              <TrashIcon />
            </button>
          </div>
          <span className="spanId">ID {productInstanceId}</span>
          <span className="spanSize">Розмір: {size}</span>
          <div className="containerColor">
            <span className="spanColor">Колір:</span>
            <div className="wrapperColor">
              <div
                className="color"
                style={{ backgroundColor: translatedColor }}
              ></div>
            </div>
          </div>

          <div className="wrapperCountPrice">
            <div className="wrapperCounter">
              <button
                type="button"
                onClick={handleClickCount}
                disabled={quantity <= 1}
                className="buttonCount"
              >
               <IconMinus className="icon"/>
              </button>
              <span className="countQuantity">{quantity}</span>
              <button
                type="button"
                onClick={handleClickAddCount}
                disabled={quantity >= stockQuantity}
                className="buttonCount"
              >
                <IconPlus className="icon"/>
              </button>
            </div>
            <div>

              <p className="price">{totalPrice}₴</p>
            </div>
          </div>
        </div>
      </div>
    </BasketItem>
  );
};

export default BasketCard;
