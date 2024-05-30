import ReactSelect from "react-select";
import { StyledSortingPanel } from "./Styled";
import { useState } from "react";

const options = [
  { value: "byRate", label: "За рейтингом" },
  { value: "asc", label: "Від дешевших до дорогих" },
  { value: "desc", label: "Від дорогих до дешевших" },
  { value: "isNewCollection", label: "Нова колекція" },
];

const customStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      fontFamily: `Nunito`,
      fontWeight: "500",
      fontSize: "22px",
      textAlign: "center",
      color: `#000`,
    };
  },
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
  }),
  option: (provided, state) => ({
    ...provided,
    fontWeight: 500,
    fontSize: 22,
    textAlign: "center",
    color: "#000",
    borderLeft: state.isFocused ? "2px solid #939FDF" : "none",
    borderRight: state.isFocused ? "2px solid #939FDF" : "none",
    backgroundColor: "transparent",
  }),
};

const SortingPanel = ({ className, handleSorting }) => {
  return (
    <StyledSortingPanel className={className}>
      <ReactSelect
        placeholder="Сортування"
        options={options}
        isClearable={false}
        isSearchable={false}
        styles={customStyles}
        onChange={handleSorting}
      />
    </StyledSortingPanel>
  );
};

export default SortingPanel;
