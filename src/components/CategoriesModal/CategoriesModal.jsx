import { StyledCategoriesModal } from "./Styled";
import { Link, useLocation } from "react-router-dom";
import { routes } from "src/routes";
import { useEffect, useRef } from "react";

const CategoriesModal = ({ closeModal, categories }) => {
  const location = useLocation();
  const isFirstRenderRef = useRef(true);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isFirstRenderRef.current === false) closeModal();

    return () => (isFirstRenderRef.current = false);
  }, [closeModal, location]);

  useEffect(() => {
    const handleEscClick = (event) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscClick);
    window.addEventListener("scroll", closeModal);

    return () => {
      window.removeEventListener("keydown", handleEscClick);
      window.removeEventListener("scroll", closeModal);
    };
  }, [closeModal]);

  return (
    <StyledCategoriesModal onClick={handleOverlayClick}>
      <div className="categoriesModal">
        <div className="categoriesList">
          {categories.map((category) => {
            if (category.id <= 4) {
              return (
                <div className="categoryGroup" key={category.id}>
                  <Link
                    className="categoryGroupTitle"
                    to={`${routes.CATALOG_PAGE}/${category.id}`}
                  >
                    {category.name}
                  </Link>
                  <ul className="categoryGroupList">
                    {category.categories.map((subCategory) => {
                      return (
                        <Link
                          className="subCategoryLink"
                          to={`${routes.CATALOG_PAGE}/${category.id}/${subCategory.id}`}
                          key={subCategory.id}
                        >
                          <div className="subCategoryLinkContent">
                            {subCategory.name}
                          </div>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              );
            }
          })}
        </div>
      </div>
    </StyledCategoriesModal>
  );
};

export default CategoriesModal;
