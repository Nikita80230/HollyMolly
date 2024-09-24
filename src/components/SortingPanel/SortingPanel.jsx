/* eslint-disable react/display-name */
import ReactSelect from "react-select";
import { StyledSortingPanel } from "./Styled";
import { forwardRef, useState } from "react";

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
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 1.20833,
      textAlign: "center",
      color: "#100503",
    };
  },
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: 10,
    borderColor: "#c4c4c4",
    boxShadow: "none",
    paddingLeft: 20,
    paddingRight: 20,
    width: 340,
    height: 40,
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 1.20833,
    textAlign: "center",
    color: "#100503",
    "&:hover": {
      borderColor: "#c4c4c4",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 1.20833,
    textAlign: "center",
    color: state.isSelected ? "#e85a50" : "#100503",
    backgroundColor: state.isFocused ? "#fff" : "#fff",
    "&:active": {
      backgroundColor: "#fff",
    },
    "@media only screen and (max-width: 564px)": {
      fontSize: 14,
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    boxShadow: "5px 5px 10px 0 #c0bfbf",
    borderRadius: 10,
  }),
  menuList: (provided, state) => ({
    ...provided,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  }),
};

const SortingPanel = forwardRef(({ className, handleSorting }, ref) => {
  return (
    <StyledSortingPanel className={className} ref={ref}>
      <h2 className="titleSorting">Сортування</h2>
      <ReactSelect
        placeholder="За рейтингом"
        options={options}
        isClearable={false}
        isSearchable={false}
        styles={customStyles}
        onChange={handleSorting}
      />
    </StyledSortingPanel>
  );
});

export default SortingPanel;
