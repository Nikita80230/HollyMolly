import { StyledField } from "./Styled";
import { Field, useField } from "formik";

// const filterProps = (props) => {
//   const { isError, isValid, ...rest } = props;
//   return rest;
// };

const Input = ({ name, type, placeholder }) => {
  // const [field, meta] = useField(name);

  return (
    <StyledField
      // as={Field}
      // {...filterProps(field)}
      name={name}
      type={type}
      placeholder={placeholder}
      // isError={meta.touched && meta.error}
      // isValid={meta.touched && !meta.error}
    />
  );
};

export default Input;