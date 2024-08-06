import { WrapperCard } from "./Styled";
import HeartIcon from "src/assets/images/like.svg?react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavoriteProducts,
  toggleFavoriteProducts,
} from "src/redux/products/productsSlice";
import ListColorsButtons from "../ListColorsButtons/ListColorsButtons";
import StarRatingCard from "../StarRatingCard/StarRatindCard";
import { routes } from "src/routes";
import { useEffect, useState } from "react";
import defaultPhoto from "src/assets/images/defaultImg.webp";
import { useAuth } from "src/hooks";

const CardProductCatalog = ({ product, sortType, borderColor }) => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  const favoriteProducts = useSelector(selectFavoriteProducts);

  const isProductInFavorite = favoriteProducts.some(
    ({ id }) => id === product.id
  );

  const handleAddToFavorite = () => {
    dispatch(toggleFavoriteProducts({ ...product, borderColor }));
  };

  //===================================================================
  const [price, setPrice] = useState(null);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(null);
  const [percentageDiscount, setPercentageDiscount] = useState(null);
  const [isNewCollection, setIsNewCollection] = useState(false);
  const [activeColorId, setActiveColorId] = useState(null);
  const [pictureProduct, setPictureProduct] = useState(null);
  const [selectedProductInstance, setSelectedProductInstance] = useState(null);

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
          state={{ location, params }}
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
          {isLoggedIn && (
            <button className="buttonIcon" onClick={handleAddToFavorite}>
              <HeartIcon
                className={`iconHeart ${isProductInFavorite ? "added" : ""} `}
              />
            </button>
          )}
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
