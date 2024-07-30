import SearchIcon from "src/assets/images/search.svg?react";

import { StyledSearchOrderInput } from "./Styled";

const SearchOrderInput = ({ onSearchInputChange, searchInputValue }) => {
  return (
    <StyledSearchOrderInput>
      <label className="searchLabel">
        <SearchIcon className="searchIcon" />
        <input
          className="searchInput"
          type="text"
          name=""
          placeholder="Пошук за номером замовлення"
          onChange={(event) => onSearchInputChange(event.target.value)}
          value={searchInputValue}
        />
      </label>
    </StyledSearchOrderInput>
  );
};

export default SearchOrderInput;
