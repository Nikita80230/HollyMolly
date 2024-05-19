import { Link } from "react-router-dom";
import { StyledCardCategories } from "./Styled";
import defaultPhoto from "src/assets/images/defaultImg.webp";
import { routes } from "src/routes";

const CardCategories = ({ category }) => {

  return (
    <Link
      to={`${routes.CATALOG_PAGE}/${category.categoryGroupId}/${category.id}`}
      key={category.id}
    >
      <StyledCardCategories>
        <img
          className="swiper-picture"
          src={category.link || defaultPhoto}
          alt={category.name}
        />

        <h4 className="textCard">{category.name}</h4>
      </StyledCardCategories>
    </Link>
  );
};

export default CardCategories;
