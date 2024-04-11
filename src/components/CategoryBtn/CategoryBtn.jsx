import { StyledCategoryBtn } from "./Styled";
import ArrowRight from "../../assets/images/halfRightArrow.svg?react";

const CategoryBtn = () => {
  return (
    <StyledCategoryBtn className="headerCategory">
      <button type="button" className="openCategoryBtn">
        <span className="text">Category</span>
        <ArrowRight />
      </button>
    </StyledCategoryBtn>
  );
};

export default CategoryBtn;
