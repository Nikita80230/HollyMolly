import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "src/redux/auth/operations";
import { RegisterSchema } from "src/schemas/RegisterSchema";
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
          confirmPassword:"",
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        <StyledForm>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="p"/>
          <Field name="password" type="text" />
          <ErrorMessage name="password" component="p"/>
          <Field name="confirmPassword" type="text" placeholder="Підтвердіть пароль" />
          <ErrorMessage name="confirmPassword" component="p"/>
          <button type="submit">Register</button>
        </StyledForm>
      </Formik>
    </>
  );
};

export default RegisterForm;
