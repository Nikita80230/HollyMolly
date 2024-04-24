// import AsyncSelect from "react-select/async";
// import { useFormik } from "formik";

// import { useState } from "react";
import SearchIcon from "src/assets/images/search.svg?react";
import { StyledSearchHeaderBtn } from "./Styled";

const SearchHeaderForm = ({ handleOpenSearchMenu }) => {
  return (
    <StyledSearchHeaderBtn onClick={handleOpenSearchMenu}>
      <SearchIcon className="searchIcon" />
      <span className="placeholder">Що ви шукаєте?</span>
    </StyledSearchHeaderBtn>
  );
};

export default SearchHeaderForm;

{
  /* <AsyncSelect
        className="basic-single productName input"
        classNamePrefix="select"
        name="color"
        // loadOptions={loadOptions}
        onChange={(item) => {
          handleChange(item);
          // console.log(item);
        }}
        placeholder={<div> Що ви шукаєте?</div>}
      /> */
}
// const formik = useFormik({
//   initialValues: {
//     productId: "",
//     productName: "",
//   },

//   onSubmit: (values) => {
//     const addNewProductFormData = {
//       name: values.name,
//       productId: values.id,
//     };
//     console.log("SearchHeaderForm --> ", addNewProductFormData);
//     // dispatch(addProduct(addNewProductFormData));
//   },
// });
