import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategories } from "src/redux/categories/selectors";
import { StyledMobileCategoriesList } from "./Styled";
import { routes } from "src/routes";
import { useState } from "react";

const MobileCategoriesList = ({ toggleBurgerMenu }) => {
  const [idOpenedCategory, setIdOpenedCategory] = useState(null);

  const allCategories = useSelector(selectCategories).filter(
    (category) => category.id <= 4
  );

  const handleOpenSubcategories = (id) => {
    console.log(id);
    if (id === idOpenedCategory) {
      setIdOpenedCategory(null);
    } else {
      setIdOpenedCategory(id);
    }
  };

  return (
    <StyledMobileCategoriesList>
      {allCategories.map(({ id, name, categories }) => {
        return (
          <div className="category" key={id}>
            <button
              className="categoryBtn"
              onClick={() => handleOpenSubcategories(id)}
            >
              <span className="categoryBtnLabel">{name}</span>
              <span className="categoryBtnIcon">Icon</span>
            </button>

            <div
              className={`subCategoriesWrapper ${
                id === idOpenedCategory ? "openedCategory" : ""
              }`}
            >
              {categories.map((subCategory) => {
                return (
                  <NavLink
                    className="subCategory"
                    to={`${routes.CATALOG_PAGE}/${id}/${subCategory.id}`}
                    key={subCategory.id}
                    onClick={toggleBurgerMenu}
                  >
                    {subCategory.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
        );
      })}
    </StyledMobileCategoriesList>
  );
};

export default MobileCategoriesList;
