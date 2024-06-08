import CrossIcon from "src/assets/images/crossIcon9px.svg?react";

import { StyledSelectedFiltersList } from "./Styled";
import { useDispatch } from "react-redux";
import { toggleFilter } from "src/redux/filters/filtersSlice";

const SelectedFiltersList = ({ selectedFilters, setCurrentPage }) => {
  const dispatch = useDispatch();

  //  const filter = { value: e.target.value, name: e.target.name };

  const handleRemoveFilter = (key, value) => {
      setCurrentPage(1);
    const filter = { value, name: key };
    dispatch(toggleFilter(filter));
  };

  const filtersArray = Object.entries(selectedFilters).map(([key, values]) => {
    return values.map((value) => {
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

  return (
    <StyledSelectedFiltersList>
      {filtersArray.map((el) => {
        return el;
      })}
    </StyledSelectedFiltersList>
  );
};

export default SelectedFiltersList;
