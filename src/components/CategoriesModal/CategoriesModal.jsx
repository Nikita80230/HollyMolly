import { createPortal } from "react-dom";
import { StyledCategoriesModal } from "./Styled";
import { Link } from "react-router-dom";
import { routes } from "src/routes";
import { useEffect } from "react";

const CategoriesModal = ({ closeModal, categories }) => {
  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

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

  console.log(categories);

  return (
    <StyledCategoriesModal onClick={handleOverlayClick}>
      <div className="categoriesModal">
        <h2 className="categoriesModalTitle">Усі категорії</h2>
        <div className="categoriesList">
          {categories.map((category) => {
            if (category.id <= 4) {
              return (
                <div className="categoryGroup" key={category.id}>
                  <Link className="categoryGroupTitle" to={routes.HOME}>
                    {category.name}
                  </Link>
                  <ul className="categoryGroupList">
                    {category.categories.map((subCategory) => {
                      return (
                        <Link
                          className="subCategoryLink"
                          to={routes.HOME}
                          key={subCategory.id}
                        >
                          {subCategory.name}
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
