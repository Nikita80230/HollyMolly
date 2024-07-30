import { StyledField } from "./Styled";
import { Field, useField } from "formik";

const Input = ({ name, type, placeholder, readOnly = false }) => {
  const [field, meta] = useField(name);
  const isError = meta.touched && meta.error ? true : false;
  const isValid = meta.touched && !meta.error ? true : false;

  return (
    <StyledField
      as={Field}
      {...field}
      name={name}
      type={type}
      placeholder={placeholder}
      readOnly={readOnly}
     iserror={isError.toString()}
      isvalid={isValid.toString()}
    />
  );
};

export default Input;
