import { createPortal } from "react-dom";
import { StyledCategoriesModal } from "./Styled";
import { Link } from "react-router-dom";
import { routes } from "src/routes";

const CategoriesModal = ({ closeModal, categories }) => {
  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  console.log(categories);

  return createPortal(
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
    </StyledCategoriesModal>,
    document.getElementById("root")
  );
};

export default CategoriesModal;
