import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  selectBasketProducts,
} from "src/redux/products/productsSlice";
import { BasketItem } from "./Styled";
// import { selectBasketProducts } from "src/redux/products/productsSlice";
import defaultPhoto from "src/assets/images/defaultImg.webp";
import TrashIcon from "src/assets/images/trash.svg?react";

const BasketCard = ({
 product,
  handleClickCount,
  handleClickAddCount,
}) => {
  const dispatch = useDispatch();
  const {
    productInstanceId,
    productName,
    sku,
    color,
    images,
    price,
    priceAfterDiscount,
    stockQuantity,
    quantity,
  } = product;

  const pictureProduct = images.length > 0 ? images[0].link : defaultPhoto;

  const handleClick = () => {
    dispatch(deleteProduct({ productInstanceId }));
  };

  return (
    <BasketItem key={productInstanceId}>
      <div className="wrapperCardBasket">
        <div className="wrapperPhoto">
          <img
            src={pictureProduct}
            alt={productName}
            width={200}
            height={200}
          />
        </div>
        <div className="wrapperBox">
          <div className="boxNameDelete">
            <h3>{productName}</h3>
            <button className="buttonTrash" onClick={handleClick}>
              <TrashIcon />
            </button>
          </div>
          <span>SKU: {sku}</span>
          <span className="spanColor">Колір: {color}</span>

          <div className="wrapperCountPrice">
            <div className="wrapperCounter">
              <button
                type="button"
                onClick={handleClickCount}
                disabled={quantity <= 1}
              >
                {" "}
                -{" "}
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={handleClickAddCount}
                disabled={quantity >= stockQuantity}

              >
                +
              </button>
            </div>
            <div>
              <span>{price}</span>

              <p>{priceAfterDiscount}</p>
            </div>
          </div>
        </div>
      </div>
    </BasketItem>
  );
};

export default BasketCard;