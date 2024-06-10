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
import { useEffect, useState } from "react";
import defaultPhoto from "src/assets/images/defaultImg.webp";

const CardProductCatalog = ({ product, sortType }) => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(selectFavoriteProducts);
  const isProductInFavorite = favoriteProducts.some(
    ({ id }) => id === product.id
  );

  const handleAddToFavorite = () => {
    dispatch(toggleFavoriteProducts(product));
  };

  //===================================================================
  const [price, setPrice] = useState(null);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(null);
  const [percentageDiscount, setPercentageDiscount] = useState(null);
  const [isNewCollection, setIsNewCollection] = useState(false);
  const [activeColorId, setActiveColorId] = useState(null);
  const [pictureProduct, setPictureProduct] = useState(null);

  const handleClick = (id) => {
    const selectedProductInstance = product.productsInstances.find(
      (productInstance) => productInstance.id === id
    );
    if (selectedProductInstance) {
      setPrice(selectedProductInstance.price);
      setPriceAfterDiscount(selectedProductInstance.priceAfterDiscount);
      setPercentageDiscount(selectedProductInstance.percentageDiscount || null);
      setIsNewCollection(selectedProductInstance.isNewCollection);
      setActiveColorId(id);
      if (
        selectedProductInstance.images &&
        selectedProductInstance.images.length > 0
      ) {
        setPictureProduct(selectedProductInstance.images[0].link);
      }
    }
  };

  useEffect(() => {
    if (sortType.value === "isNewCollection") {
      const newCollectionProduct = product.productsInstances.find(
        (instance) => instance.isNewCollection
      );
      if (newCollectionProduct) {
        handleClick(newCollectionProduct.id);
      }
    } else {
      if (product.productsInstances.length > 0) {
        const firstProductInstance = product.productsInstances[0];
        handleClick(firstProductInstance.id);
      }
    }
  }, [product.productsInstances, sortType]);

  return (
    <li key={product.id}>
      <WrapperCard>
        <img
          className="productPhoto"
          src={pictureProduct || defaultPhoto}
          alt={product.name || "product picture"}
          width={278}
          height={393}
        />

        <ListColorsButtons
          colors={product.productsInstances}
          handleClick={handleClick}
          activeColorId={activeColorId}
        />
        <h4 className="title">{product.name}</h4>
        {percentageDiscount && (
          <span className="styledSpanDiscount">Акція</span>
        )}
        {isNewCollection && <span className="styledSpan">Новинка</span>}

        {product.rating === 5 && (
          <span className="styledSpanRating">Топ продажів</span>
        )}
        <div className="wrapperColorsFeedbackHeart">
          <div className="buttonsFeedback">
            <StarRatingCard rating={product.rating} />

            <Link to={`${routes.FEEDBACK}/${product.categoryId}/${product.id}`}>
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
            {price > priceAfterDiscount && (
              <p className="price">{price ? `${price}₴` : ""}</p>
            )}
            <p className="priceAfterDiscount">
              {priceAfterDiscount ? `${priceAfterDiscount}₴` : ""}
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
