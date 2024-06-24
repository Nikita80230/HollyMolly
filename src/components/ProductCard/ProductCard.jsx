// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectFavoriteProducts,
  toggleFavoriteProducts,
} from "src/redux/products/productsSlice";

import cardImg from "src/assets/images/recommendation-section/Rectangle 324..jpg";
// import NotAddToFavoriteIcon from "src/assets/images/heart.svg?react";
import AddToFavoriteIcon from "src/assets/images/likeCard.svg?react";

import ColorSwitcher from "../ColorSwitcher/ColorSwitcher";

import { StyledProductCard } from "./Styled";

const ProductCard = ({ product, index }) => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(selectFavoriteProducts);
  // const [isAddedToFavorite, setIdAddedToFavorite] = useState(false);

  const isProductInFavorite = favoriteProducts.some(
    ({ id }) => id === product.id
  );

  const handleAddToFavorite = () => {
    dispatch(toggleFavoriteProducts(product));
  };

  const colors = ['#fff6e7', '#e2edf4', '#eff9f1', '#f9eff5'];
  const borderColor = colors[index % colors.length];

  return (
    <StyledProductCard>
      <img className="productImg" src={cardImg} alt="product's photo" style={{ border: `3px solid ${borderColor}` }} />
        <h4 className="productTitle">{product.name}</h4>
      <div className="productInfoWrapper">
         <ColorSwitcher />
        <button
          className="addToFavoriteButton"
          type="button"
          onClick={handleAddToFavorite}
        >
          <AddToFavoriteIcon
            className={`addToFavoriteIcon ${
              isProductInFavorite ? "added" : ""
            }`}
          />
        </button>
</div>
        <span className="productPrice">
          {product.productsInstances[0].price}₴
        </span>
    </StyledProductCard>
  );
};

export default ProductCard;
