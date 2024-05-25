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
import ListColorsButtons from "../ListColorsButtons/ListColorsButtons";
import StarRatingCard from "../StarRaitingCard/StarRaitindCard";
import { routes } from "src/routes";

const CardProductCatalog = ({ product }) => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(selectFavoriteProducts);
  const isProductInFavorite = favoriteProducts.some(
    ({ id }) => id === product.id
  );

  const handleAddToFavorite = () => {
    dispatch(toggleFavoriteProducts(product));
  };

  // const {
  //   productsInstances: [productsInstance],
  // } = product;

  return (
    <li key={product.id}>
      <WrapperCard>
        <img className="productPhoto" width={278} height={393} />

        <ListColorsButtons colors={product.productsInstances} />

        <h4 className="title">{product.name}</h4>

        {product.productsInstances.map((productInstance) => {
          productInstance.percentageDiscount;
        }) > 0 && <span className="styledSpanDiscount">Акція</span>}
        {product.productsInstances.map((productInstance) => {
          productInstance.isNewCollection;
        }) && <span className="styledSpan">Новинка</span>}
        {product.rating === 5 && (
          <span className="styledSpanRating">Топ продажів</span>
        )}

        <div className="wrapperColorsFeedbackHeart">
          <div className="buttonsFeedback">
            <StarRatingCard rating={product.rating} />

            <Link
              to={`${routes.FEEDBACK}/${product.categoryId}/${product.id}`}
            >
              <div className="wrapperFeedback">
                <Feedback />
                {product.feedbacks.length === 0 ? (
                  <span className="spanFeedback">Залишити відгук</span>
                ) : (
                  <span className="spanFeedback">
                    {product.feedbacks.length}
                  </span>
                )}
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
            {product.productsInstances[0].price >
              product.productsInstances[0].priceAfterDiscount && (
              <p className="price">{product.productsInstances[0].price}₴</p>
            )}
            <p className="priceAfterDiscount">
              {product.productsInstances[0].priceAfterDiscount}₴
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
