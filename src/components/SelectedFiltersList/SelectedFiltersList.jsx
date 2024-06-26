import CrossIcon from "src/assets/images/crossIcon9px.svg?react";

import { StyledSelectedFiltersList } from "./Styled";
import { useDispatch } from "react-redux";
import { toggleFilter } from "src/redux/filters/filtersSlice";

const SelectedFiltersList = ({ selectedFilters }) => {
  const dispatch = useDispatch();

  //  const filter = { value: e.target.value, name: e.target.name };

  const handleRemoveFilter = (key, value) => {
    const filter = { value, name: key };
    dispatch(toggleFilter(filter));
  };

  const filtersArray = Object.entries(selectedFilters).map(([key, values]) => {
   if (Array.isArray(values)) {
      return values.map((value) => (
        <div key={`${key}-${value}`} className="filter">
          <span className="filterName">{value}</span>
          <button
            type="button"
            className="removeFilterBtn"
            onClick={() => handleRemoveFilter(key, value)}
          >
            <CrossIcon />
          </button>
        </div>
      ));
    } else {
     
      return []; 
    }
  });

  return (
    <StyledSelectedFiltersList>
      {filtersArray.map((el) => {
        return el;
      })}
    </StyledSelectedFiltersList>
  );
};

export default SelectedFiltersList;
