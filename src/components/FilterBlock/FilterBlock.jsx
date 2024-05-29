import CheckedIcon from "src/assets/images/checkedIcon.svg?react";

import { StyledFilterBlock } from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, toggleFilter } from "src/redux/filters/filtersSlice";

const FilterBlock = ({ title, options }) => {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);

  const handleChange = (e) => {
    const filter = { value: e.target.value, name: e.target.name };
    dispatch(toggleFilter(filter));
  };

  console.log("options", options);

  if (!options.values.length) return;

  return (
    <StyledFilterBlock>
      <div className="filter">
        <h3 className="filterTitle title">{title}</h3>
        <div className="checkboxSection">
          {options?.values?.map((option) => {
            const isFilterSelected =
              filters[options.filterName].includes(option);
            // console.log(
            //   "filters[options.filterName]",
            //   filters[options.filterName]
            // );
            return (
              <label className="checkboxLabel" key={option}>
                <input
                  className="commonCheckbox"
                  type="checkbox"
                  name={options.filterName}
                  value={option}
                  onChange={handleChange}
                  checked={isFilterSelected}
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
