import SearchIcon from "../../assets/images/search.svg?react";
import { StyledSearchHeaderForm } from "./Styled";

const SearchHeaderForm = () => {
  return (
    <StyledSearchHeaderForm>
      <SearchIcon className="searchIcon" />

      <input
        className="input"
        placeholder=" "
        type="text"
        name="searchForm"
        // onChange={onChange}
        // value={value}
        // required={required}
        // disabled={disabled}
      />
      <span className="placeholder">
        What are you looking for?
        {/* {labelText} */}
        {/* {required && "*"} */}
      </span>
    </StyledSearchHeaderForm>
  );
};

export default SearchHeaderForm;
