// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  // addProductToFavorite,
  // removeProductFromFavorite,
  selectFavoriteProducts,
  toggleFavoriteProducts,
} from "src/redux/products/productsSlice";

import cardImg from "src/assets/images/recommendation-section/Rectangle 324.png";
import NotAddToFavoriteIcon from "src/assets/images/heart.svg?react";
import AddedToFavoriteIcon from "src/assets/images/heartFull.svg?react";

import ColorSwitcher from "../ColorSwitcher/ColorSwitcher";

import { StyledProductCard } from "./Styled";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(selectFavoriteProducts);
  // const [isAddedToFavorite, setIdAddedToFavorite] = useState(false);

  const isProductInFavorite = favoriteProducts.some(
    ({ id }) => id === product.id
  );

  const handleAddToFavorite = () => {
    dispatch(toggleFavoriteProducts(product));
  };

  return (
    <StyledProductCard>
      <img className="productImg" src={cardImg} alt="product's photo" />
      <div className="productInfoWrapper">
        <button
          className="addToFavoriteButton"
          type="button"
          onClick={handleAddToFavorite}
        >
          {isProductInFavorite ? (
            <AddedToFavoriteIcon className="addToFavoriteIcon" />
          ) : (
            <NotAddToFavoriteIcon className="addToFavoriteIcon" />
          )}
        </button>

        <h4 className="productTitle">{product.name}</h4>
        <span className="productPrice">
          {product.productsInstances[0].price}₴
        </span>
        <ColorSwitcher />
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
