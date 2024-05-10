import { Link } from "react-router-dom";
import { StyledCardCategories } from "./Styled";
import defaultPhoto from "src/assets/images/defaultImg.webp";

const CardCategories = ({ category }) => {
  return (
    <StyledCardCategories>
      <img
        className="swiper-picture"
        src={category.link || defaultPhoto}
        alt={category.name}
      />

      <h4 className="textCard">{category.name}</h4>
    </StyledCardCategories>
  );
};

export default CardCategories;
