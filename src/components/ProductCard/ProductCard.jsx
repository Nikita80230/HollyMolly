import { StyledProductCard } from "./Styled";

import cardImg from "src/assets/images/recommendation-section/Rectangle 324.png";

const ProductCard = () => {
  return (
    <StyledProductCard>
      <img className="productImg" src={cardImg} alt="product's photo" />
      <h4 className="productTitle">title</h4>
      <span className="productPrice">$100</span>
      <span className="productColorSwitcher">colorSwitcher</span>
    </StyledProductCard>
  );
};

export default ProductCard;
