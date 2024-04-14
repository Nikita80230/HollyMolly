import { useState } from "react";
import { StyledProductCard } from "./Styled";

import NotAddToFavoriteIcon from "src/assets/images/heart.svg?react";
import AddedToFavoriteIcon from "src/assets/images/heartFull.svg?react";

import cardImg from "src/assets/images/recommendation-section/Rectangle 324.png";
import ColorSwitcher from "../ColorSwitcher/ColorSwitcher";

const ProductCard = () => {
  const [isAddedToFavorite, setIdAddedToFavorite] = useState(false);

  const handleAddToFavorite = () => {
    setIdAddedToFavorite(!isAddedToFavorite);
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
          {isAddedToFavorite ? (
            <AddedToFavoriteIcon className="addToFavoriteIcon" />
          ) : (
            <NotAddToFavoriteIcon className="addToFavoriteIcon" />
          )}
        </button>

        <h4 className="productTitle">Назва товару</h4>
        <span className="productPrice">100₴</span>
        <ColorSwitcher />
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
