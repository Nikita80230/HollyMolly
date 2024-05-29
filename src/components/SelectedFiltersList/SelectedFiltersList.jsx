import CrossIcon from "src/assets/images/crossIcon9px.svg?react";

import { StyledSelectedFiltersList } from "./Styled";
import { useDispatch } from "react-redux";
import { toggleFilter } from "src/redux/filters/filtersSlice";

const SelectedFiltersList = ({ selectedFilters }) => {
  const dispatch = useDispatch();
  console.log("selectedFilters-->", selectedFilters);

  //  const filter = { value: e.target.value, name: e.target.name };

  const handleRemoveFilter = (key, value) => {
    const filter = { value, name: key };
    console.log("handleRemoveFilter-->", filter);
    dispatch(toggleFilter(filter));
  };

  const filtersArray = Object.entries(selectedFilters).map(([key, values]) => {
    return values.map((value) => {
      console.log(key, value);
      return (
        <div key={value} className="filter">
          <span className="filterName">{value}</span>
          <button
            type="button"
            className="removeFilterBtn"
            onClick={() => handleRemoveFilter(key, value)}
          >
            <CrossIcon />
          </button>
        </div>
      );
    });
  });
  console.log("filtersArray-->", filtersArray);

  return (
    <StyledSelectedFiltersList>
      {filtersArray.map((el) => {
        return el;
      })}

      {/* {selectedFilters.materials.length > 0 &&
        selectedFilters.materials.map((material) => {
          return (
            <div key={material}>
              <span>{material}</span>
              <button type="button">
                <CrossIcon />
              </button>
            </div>
          );
        })}
      {selectedFilters.sizes.length > 0 &&
        selectedFilters.sizes.map((size) => {
          return (
            <div key={size}>
              <span>{size}</span>
              <button type="button">
                <CrossIcon />
              </button>
            </div>
          );
        })} */}
    </StyledSelectedFiltersList>
  );
};

export default SelectedFiltersList;
