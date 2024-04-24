import { StyledCategoryBtn } from "./Styled";
import ArrowRight from "../../assets/images/halfRightArrow.svg?react";
import { useSelector } from "react-redux";
import { selectCategories } from "src/redux/categories/selectors";
import { useState } from "react";
import CategoriesModal from "src/components/CategoriesModal/CategoriesModal";

const CategoryBtn = () => {
  const categories = useSelector(selectCategories);

  const [isCategoriesModalOpened, setIsCategoriesModalOpened] = useState(false);

  const handleOpenCategoriesModal = () => {
    setIsCategoriesModalOpened(true);
  };

  const handleCloseCategoriesModal = () => {
    setIsCategoriesModalOpened(false);
  };

  return (
    <StyledCategoryBtn className={isCategoriesModalOpened ? "hidden" : ""}>
      <button
        type="button"
        className="openCategoryBtn"
        onClick={
          isCategoriesModalOpened
            ? handleCloseCategoriesModal
            : handleOpenCategoriesModal
        }
      >
        <span className="text">Категорія</span>
        <ArrowRight
          className={`openCategoryIcon ${
            isCategoriesModalOpened ? "openedCategoryIcon" : ""
          }`}
        />
      </button>
      {isCategoriesModalOpened && (
        <CategoriesModal
          categories={categories}
          closeModal={handleCloseCategoriesModal}
        />
      )}
    </StyledCategoryBtn>
  );
};

export default CategoryBtn;
