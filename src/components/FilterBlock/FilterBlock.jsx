import CheckedIcon from "src/assets/images/checkedIcon.svg?react";

import { StyledFilterBlock } from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, toggleFilter } from "src/redux/filters/filtersSlice";

const FilterBlock = ({ title, options, onPaginationReset }) => {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);

  const handleChange = (e) => {
    const filter = { value: e.target.value, name: e.target.name };
    dispatch(toggleFilter(filter));
    onPaginationReset();
  };

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
            const formattedOption =
              option.charAt(0).toUpperCase() + option.slice(1).toLowerCase();
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
                <span className="textCheckbox">{formattedOption}</span>
              </label>
            );
          })}
        </div>
      </div>
    </StyledFilterBlock>
  );
};

export default FilterBlock;
