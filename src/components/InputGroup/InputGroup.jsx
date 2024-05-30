import { StyledInputGroup } from "./Styled";

const InputGroup = ({
  handleChange,
  searchValue,
  className,
  placeholder,
  autoFocus,
}) => {
  return (
    <StyledInputGroup className={className}>
      <input
        className="input"
        placeholder={placeholder}
        type="text"
        name="searchForm"
        onChange={handleChange}
        value={searchValue}
        autoFocus={autoFocus}
        // required={required}
        // disabled={disabled}
      />
    </StyledInputGroup>
  );
};

export default InputGroup;
