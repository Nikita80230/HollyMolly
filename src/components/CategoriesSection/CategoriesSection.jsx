import { StyledCategoriesSection } from "./Styled";

import { useSelector } from "react-redux";
import { selectCategories } from "src/redux/categories/selectors";

import { Link } from "react-router-dom";
import defaultPhoto from "src/assets/images/defaultImg.webp";
import { routes } from "src/routes";

const CategoriesSection = () => {
  const categories = useSelector(selectCategories);

  const colors = ["#fff6e7", "#e2edf4", "#eff9f1", "#f9eff5"];

  return (
    <StyledCategoriesSection>
      <h2 className="titleCategories">Категорії</h2>

      <ul className="listCategories">
        {categories.map(({ id, link, name }, index) => (
          <li
            className="wrapperItem"
            key={id}
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <Link to={`${routes.CATALOG_PAGE}/${id}`} key={id}>
              <img
                className="categoriesPhoto"
                src={link || defaultPhoto}
                alt={name}
              />
              <p className="textCard">{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </StyledCategoriesSection>
  );
};

export default CategoriesSection;
