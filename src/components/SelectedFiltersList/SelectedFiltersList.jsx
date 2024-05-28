import CrossIcon from "src/assets/images/crossIcon9px.svg?react";

import { StyledSelectedFiltersList } from "./Styled";

const SelectedFiltersList = ({ selectedFilters }) => {
  console.log("selectedFilters-->", selectedFilters);

  return (
    <StyledSelectedFiltersList>
      {selectedFilters.colors.length > 0 &&
        selectedFilters.colors.map((color) => {
          return (
            <div key={color} className="filter">
              <span className="filterName">{color}</span>
              <button type="button" className="removeFilterBtn">
                <CrossIcon />
              </button>
            </div>
          );
        })}

      {selectedFilters.materials.length > 0 &&
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
        })}
    </StyledSelectedFiltersList>
  );
};

export default SelectedFiltersList;
