import ReactSelect from "react-select";
import { StyledSortingPanel } from "./Styled";

const options = [
  { value: "chocolate", label: "Сортування" },
  { value: "chocolate", label: "За рейтингом" },
  { value: "strawberry", label: "Від дешевших до дорогих" },
  { value: "vanilla", label: "Від дорогих до дешевших" },
  { value: "vanilla", label: "Нові" },
];

const customStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: 358,
    height: 54,
    fontWeight: 500,
    fontSize: 22,
    textAlign: "center",
    color: "#000",
    // borderColor: state.isFocused ? "grey" : "red",
  }),
  option: (provided, state) => ({
    ...provided,
    fontWeight: 500,
    fontSize: 22,
    textAlign: "center",
    color: "#000",
    borderLeft: state.isFocused ? "2px solid #939FDF" : "none",
    borderRight: state.isFocused ? "2px solid #939FDF" : "none",
    backgroundColor: "transparent", // Change background color for selected options
    // Change background color for selected options
  }),
};

// styles={{
//     control: (baseStyles, state) => ({
//       ...baseStyles,
//       borderColor: state.isFocused ? 'grey' : 'red',
//     }),
//   }}

// font-family: var(--font-family);
// font-weight: 500;
// font-size: 22px;
// text-align: center;
// color: #000;

const SortingPanel = ({ className }) => {
  return (
    <StyledSortingPanel className={className}>
      <ReactSelect
        defaultValue={options[0]}
        options={options}
        isClearable={false}
        isSearchable={false}
        styles={customStyles}
      />
    </StyledSortingPanel>
  );
};

export default SortingPanel;
