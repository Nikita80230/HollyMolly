import { Link } from "react-router-dom";
import { StyledCardCategories } from "./Styled";
import defaultPhoto from "src/assets/images/defaultImg.webp";

const CardCategories = ({ category }) => {
  
  return (
    <StyledCardCategories>
      <Link>
        <img
          className="swiper-picture"
          src={category.link || defaultPhoto}
          alt={category.name}
        />
        <p className="textCard">{category.name}</p>
      </Link>
    </StyledCardCategories>
  );
};

export default CardCategories;
