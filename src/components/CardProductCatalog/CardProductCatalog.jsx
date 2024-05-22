import { WrapperCard } from "./Styled";
import Feedback from "src/assets/images/feedback.svg?react";
import HeartIcon from "src/assets/images/heartBlue.svg?react";
import BasketIcon from "src/assets/images/basketBlue.svg?react";
// import HeartHoverIcon from "src/assets/images/heartBlueHover.svg?react";
// import BasketHoverIcon from "src/assets/images/basketBlueHover.svg?react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavoriteProducts,
  toggleFavoriteProducts,
} from "src/redux/products/productsSlice";

const CardProductCatalog = ({ product }) => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(selectFavoriteProducts);
  const isProductInFavorite = favoriteProducts.some(
    ({ id }) => id === product.id
  );

  const handleAddToFavorite = () => {
    dispatch(toggleFavoriteProducts(product));
  };

  const {
    productsInstances: [productsInstance],
  } = product;

  return (
    <li key={product.id}>
      <WrapperCard>
        <img className="productPhoto" width={278} height={393} />
        <h4 className="title">{product.name}</h4>

        {productsInstance.percentageDiscount > 0 && (
          <span className="styledSpanDiscount">
            {productsInstance.percentageDiscount}%
          </span>
        )}
        {productsInstance.isNewCollection && (
          <span className="styledSpan">Новинка</span>
        )}
        <div className="wrapperColorsFeedbackHeart">
          <div className="buttonsFeedback">
            <button
              className="buttonColor"
              style={{
                backgroundColor: productsInstance.color,
              }}
            ></button>
            <Link>
              <div className="wrapperFeedback">
                <Feedback />
                <span className="spanFeedback">Залишити відгук</span>
              </div>
            </Link>
          </div>
          <button className="buttonIcon" onClick={handleAddToFavorite}>
            {
              <HeartIcon
                className={`iconHeart ${isProductInFavorite ? "added" : ""} `}
              />
            }
          </button>
        </div>

        <div className="wrapperPriceIcon">
          <div>
            {productsInstance.price > productsInstance.priceAfterDiscount && (
              <p className="price">{productsInstance.price}₴</p>
            )}
            <p className="priceAfterDiscount">
              {productsInstance.priceAfterDiscount}₴
            </p>
          </div>
          <button className="buttonIcon">
            {/* <BasketIcon className="iconBasket" />` */}
            {
              <BasketIcon
                className={`iconBasket ${isProductInFavorite ? "added" : ""} `}
              />
            }
          </button>
        </div>
      </WrapperCard>
    </li>
  );
};

export default CardProductCatalog;
