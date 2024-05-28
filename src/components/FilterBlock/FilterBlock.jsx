import CheckedIcon from "src/assets/images/checkedIcon.svg?react";

import { StyledFilterBlock } from "./Styled";
import { useDispatch } from "react-redux";
import { addFilter } from "src/redux/filters/filtersSlice";

const FilterBlock = ({ title, options }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const filter = { value: e.target.value, name: e.target.name };
    dispatch(addFilter(filter));
  };
  if (!options.values.length) return;
  return (
    <StyledFilterBlock>
      <div className="filter">
        <h3 className="filterTitle title">{title}</h3>
        <div className="checkboxSection">
          {options?.values?.map((option) => {
            return (
              <label className="checkboxLabel" key={option}>
                <input
                  className="commonCheckbox"
                  type="checkbox"
                  name={options.filterName}
                  value={option}
                  onChange={handleChange}
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
