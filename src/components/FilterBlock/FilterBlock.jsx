import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CheckedIcon from "src/assets/images/checkedIcon.svg?react";
import ArrowRight from "src/assets/images/arrow-down.svg?react";

import { selectFilters, toggleFilter } from "src/redux/filters/filtersSlice";

import { StyledFilterBlock, StyledMobileFilterBlock } from "./Styled";

const FilterBlock = ({ title, options, onPaginationReset, deviceType }) => {
  const dispatch = useDispatch();

  const [isFilterValuesOpened, setIsFilterValuesOpened] = useState(false);

  const filters = useSelector(selectFilters);

  const handleChange = (e) => {
    const filter = { value: e.target.value, name: e.target.name };
    dispatch(toggleFilter(filter));
    onPaginationReset();
  };

  console.log("optionsFromFilterBlock----->", options);
  if (!options?.values.length) return;

  if (deviceType === "desktop") {
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
  }
  if (deviceType === "mobile") {
    return (
      <StyledMobileFilterBlock>
        <button
          className="openFilterValuesBtn"
          type="button"
          onClick={() => setIsFilterValuesOpened(!isFilterValuesOpened)}
        >
          <span>{title}</span>
          <ArrowRight
            className={`categoryBtnIcon ${
              isFilterValuesOpened ? "openCategoryBtnIcon" : ""
            }`}
          />
        </button>
        <div
          className={`checkboxSection ${isFilterValuesOpened ? "active" : ""}`}
        >
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
        {/* <ul className="filterValuesList">
          <li className="filterValue"></li>
          <li className="filterValue"></li>
          <li className="filterValue"></li>
          <li className="filterValue"></li>
        </ul> */}
      </StyledMobileFilterBlock>
    );
  }
};

export default FilterBlock;
