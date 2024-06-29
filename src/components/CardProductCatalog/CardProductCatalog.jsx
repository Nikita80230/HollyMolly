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
import AddToBasket from "../AddToBasket/AddToBasket";
import defaultPhoto from "src/assets/images/defaultImg.webp";

const CardProductCatalog = ({ product, sortType, index}) => {
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

const colors = ['#fff6e7', '#e2edf4', '#eff9f1', '#f9eff5'];
  const borderColor = colors[index % colors.length];

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
      <Link to={`${routes.PRODUCT_PAGE}/${product.id}`}>
      <WrapperCard>
        <div className="wrapperPhoto" style={{ border: `3px solid ${borderColor}` }}>
        <img
          className="productPhoto"
          src={pictureProduct || defaultPhoto}
          alt={product.name || "product picture"}
          
        /></div>

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
            /></button>
        </div>
        
       {percentageDiscount && (
          <span className="styledSpanDiscount">Акція</span>
        )}
        {isNewCollection && <span className="styledSpan">Новинка</span>}

        {product.rating === 5 && (
          <span className="styledSpanRating">Топ продажів</span>
        )} 
        {/* <div className="wrapperColorsFeedbackHeart">
          <div className="buttonsFeedback"> */}
            {/* <StarRatingCard rating={product.rating || 0} />

            <Link to={`${routes.FEEDBACK}/${product.categoryId}/${product.id}`}>
              <div className="wrapperFeedback">
                <Feedback />
                {product.feedbacks && product.feedbacks.length === 0 ? (
                  <span className="spanFeedback">Залишити відгук</span>
                ) : (
                  <span className="spanFeedback">
                    {product.feedbacks ? product.feedbacks.length : 0}
                  </span>
                )}
              </div>
            </Link> */}
          {/* </div>
          <button className="buttonIcon" onClick={handleAddToFavorite}>
            {
              <HeartIcon
                className={`iconHeart ${isProductInFavorite ? "added" : ""} `}
              />
            }
          </button>
        </div> */}

        <div className="wrapperPriceIcon">
          <div>
            {price > priceAfterDiscount && (
              <p className="price">{price ? `${price}₴` : ""}</p>
            )}
            <p className="priceAfterDiscount">
              {priceAfterDiscount ? `${priceAfterDiscount}₴` : ""}
            </p>
          </div>
          {/* <AddToBasket
            product={product}
            selectedProductInstance={selectedProductInstance}
          /> */}
        </div>
        </WrapperCard>
        </Link>
    </li>
  );
};

export default CardProductCatalog;
