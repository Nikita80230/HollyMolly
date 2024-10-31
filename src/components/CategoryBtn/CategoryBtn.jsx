import { StyledCategoryBtn } from "./Styled";
import ArrowRight from "src/assets/images/arrow-down.svg?react";
import { useSelector } from "react-redux";
import { selectCategories } from "src/redux/categories/selectors";
import { useState } from "react";
import CategoriesModal from "src/components/CategoriesModal/CategoriesModal";
import IconCloseMenu from "src/assets/images/closeCrossIcon.svg?react";
import IconOpenMenu from "src/assets/images/openBurgerIcon.svg?react";

const CategoryBtn = ({ isDesktop, isTablet }) => {
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
      {isDesktop && (
        <button
          type="button"
          className="openCategoryBtn"
          onClick={
            isCategoriesModalOpened
              ? handleCloseCategoriesModal
              : handleOpenCategoriesModal
          }
        >
          <span className="text">Каталог</span>
          <ArrowRight
            className={`openCategoryIcon ${
              isCategoriesModalOpened ? "openedCategoryIcon" : ""
            }`}
          />
        </button>
      )}
      {isTablet && (
        <button
          type="button"
          className="openCategoryBtn"
          onClick={
            isCategoriesModalOpened
              ? handleCloseCategoriesModal
              : handleOpenCategoriesModal
          }
        >
          {isCategoriesModalOpened ? (<IconCloseMenu className="iconClose" />) :
            (<IconOpenMenu className="icon" />)}</button>
      )}
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
