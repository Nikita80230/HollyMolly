import { WrapperCard } from "./Styled";
import Feedback from "src/assets/images/feedback.svg?react";
import HeartIcon from "src/assets/images/like.svg?react";

// import HeartHoverIcon from "src/assets/images/heartBlueHover.svg?react";
// import BasketHoverIcon from "src/assets/images/basketBlueHover.svg?react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBasketProducts,
  selectFavoriteProducts,
  toggleFavoriteProducts,
} from "src/redux/products/productsSlice";
import ListColorsButtons from "../ListColorsButtons/ListColorsButtons";
import StarRatingCard from "../StarRaitingCard/StarRaitindCard";
import { routes } from "src/routes";
import { useEffect, useState } from "react";
import defaultPhoto from "src/assets/images/defaultImg.webp";

const CardProductCatalog = ({ product, sortType, index, borderColor }) => {
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
  const [selectedProductInstance, setSelectedProductInstance] = useState(null);

  // const colors = ["#fff6e7", "#e2edf4", "#eff9f1", "#f9eff5"];
  // const borderColor = colors[index % colors.length];

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
      setSelectedProductInstance(selectedProductInstance);
      if (
        selectedProductInstance.images &&
        selectedProductInstance.images.length > 0
      ) {
        setPictureProduct(selectedProductInstance.images[0].link);
      }
    }
  };

  useEffect(() => {
    if (sortType?.value === "isNewCollection") {
      const newCollectionProduct = product.productsInstances.find(
        (instance) => instance.isNewCollection
      );
      if (newCollectionProduct) {
        handleClick(newCollectionProduct.id);
      }
    } else {
      if (product.productsInstances && product.productsInstances.length > 0) {
        const firstProductInstance = product.productsInstances[0];
        handleClick(firstProductInstance.id);
      }
    }
  }, [product.productsInstances, sortType]);

  return (
    <li key={product.id}>
      <WrapperCard>
        <Link
          to={`${routes.PRODUCT_PAGE}/${product.id}/${selectedProductInstance?.id}`}
        >
          <div
            className="wrapperPhoto"
             style={{ border: `3px solid ${borderColor}` }}
          >
            <img
              className="productPhoto"
              src={pictureProduct || defaultPhoto}
              alt={product.name || "product picture"}
            />
          </div>
        </Link>

        <h4 className="title">{product.name}</h4>
        <div className="wrapperColorFavorite">
          <ListColorsButtons
            colors={product.productsInstances || []}
            handleClick={handleClick}
            activeColorId={activeColorId}
          />
          <button className="buttonIcon" onClick={handleAddToFavorite}>
            <HeartIcon
              className={`iconHeart ${isProductInFavorite ? "added" : ""} `}
            />
          </button>
        </div>

        {percentageDiscount && (
          <span className="styledSpanDiscount">Акція</span>
        )}
        {isNewCollection && <span className="styledSpan">Новинка</span>}

        {product.rating === 5 && (
          <span className="styledSpanRating">Топ продажів</span>
        )}

        <div className="wrapperPrice">
          
            {price > priceAfterDiscount && (
              <p className="price">{price ? `${price}₴` : ""}</p>
            )}
            <p className="priceAfterDiscount">
              {priceAfterDiscount ? `${priceAfterDiscount}₴` : ""}
            </p>
          
        </div>
      </WrapperCard>
    </li>
  );
};

export default CardProductCatalog;
