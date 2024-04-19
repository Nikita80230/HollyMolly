import AsyncSelect from "react-select/async";
import { useFormik } from "formik";

import SearchIcon from "../../assets/images/search.svg?react";
import { StyledSearchHeaderForm } from "./Styled";

const SearchHeaderForm = () => {
  const formik = useFormik({
    initialValues: {
      productId: "",
      productName: "",
    },

    onSubmit: (values) => {
      const addNewProductFormData = {
        weight: Number(values.weight),
        productId: values.id,
      };
      console.log("SearchHeaderForm --> ", addNewProductFormData);
      // dispatch(addProduct(addNewProductFormData));
    },
  });

  const handleChange = ({ item }) => {
    formik.setFieldValue("productId", item?.id);
  };

  return (
    <StyledSearchHeaderForm>
      <SearchIcon className="searchIcon" />

      <AsyncSelect
        className="basic-single productName input"
        classNamePrefix="select"
        name="color"
        // loadOptions={loadOptions}
        onChange={(item) => {
          handleChange(item);
          // console.log(item);
        }}
        placeholder={<div> Що ви шукаєте?</div>}
      />

      <input
        className="input"
        placeholder=" "
        type="text"
        name="searchForm"
        onChange={handleChange}
        // value={value}
        // required={required}
        // disabled={disabled}
      />
      <span className="placeholder">
        Що ви шукаєте?
        {/* {labelText} */}
        {/* {required && "*"} */}
      </span>
    </StyledSearchHeaderForm>
  );
};

export default SearchHeaderForm;
