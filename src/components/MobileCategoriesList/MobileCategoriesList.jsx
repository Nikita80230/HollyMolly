import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategories } from "src/redux/categories/selectors";
import { routes } from "src/routes";

import ArrowRight from "src/assets/images/arrow-down.svg?react";

import { StyledMobileCategoriesList } from "./Styled";

const MobileCategoriesList = ({ toggleBurgerMenu }) => {
  const [selectedOpenedCategoryId, setSelectedOpenedCategoryId] =
    useState(null);

  const allCategories = useSelector(selectCategories).filter(
    (category) => category.id <= 4
  );

  const handleOpenSubcategories = (id) => {
    if (id === selectedOpenedCategoryId) {
      setSelectedOpenedCategoryId(null);
    } else {
      setSelectedOpenedCategoryId(id);
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
              <span
                className={`categoryBtnLabel ${
                  id === selectedOpenedCategoryId ? "openCategoryBtnLabel" : ""
                }`}
              >
                {name}
              </span>

              <ArrowRight
                className={`categoryBtnIcon ${
                  id === selectedOpenedCategoryId ? "openCategoryBtnIcon" : ""
                }`}
              />
            </button>

            <div
              className={`subCategoriesWrapper ${
                id === selectedOpenedCategoryId ? "openedCategory" : ""
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
