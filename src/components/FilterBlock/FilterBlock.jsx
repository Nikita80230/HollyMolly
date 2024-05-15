import CheckedIcon from "src/assets/images/checkedIcon.svg?react";

import { StyledFilterBlock } from "./Styled";

const FilterBlock = ({ title, options }) => {
  return (
    <StyledFilterBlock>
      <div className="filter">
        <h3 className="filterTitle title">{title}</h3>
        <div className="checkboxSection">
          {options.map((option) => {
            return (
              <label className="checkboxLabel" key={option}>
                <input
                  className="commonCheckbox"
                  type="checkbox"
                  name=""
                  id=""
                />
                <span className="fakeCheckbox">
                  <CheckedIcon className="checkboxIcon" />
                </span>
                <span className="textCheckbox">{option}</span>
              </label>
            );
          })}
        </div>
      </div>
    </StyledFilterBlock>
  );
};

export default FilterBlock;
