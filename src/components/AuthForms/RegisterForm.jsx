import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "src/redux/auth/operations";
import { FormSchema } from "src/schemas/FormSchema";
import { StyledForm } from "./Styled";

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values,actions) => {
        dispatch(register(values));
        actions.resetForm();
    }
  return (
      <>
          <h1>Register</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        <StyledForm>
          <Field name="email" type="email" />
          <Field name="password" type="text" />
          <button type="submit">Register</button>
        </StyledForm>
      </Formik>
    </>
  );
};

export default RegisterForm;
