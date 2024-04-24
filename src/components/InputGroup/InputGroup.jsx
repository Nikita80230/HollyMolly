import { StyledInputGroup } from "./Styled";

const InputGroup = ({ handleChange, searchValue, className, placeholder }) => {
  return (
    <StyledInputGroup className={className}>
      <input
        className="input"
        placeholder={placeholder}
        type="text"
        name="searchForm"
        onChange={handleChange}
        value={searchValue}
        // required={required}
        // disabled={disabled}
      />
    </StyledInputGroup>
  );
};

export default InputGroup;
