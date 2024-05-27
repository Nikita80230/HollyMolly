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
          <Field className="inputAuth" name="email" type="email" placeholder="E-mail"/>
          <ErrorMessage name="email" component="p"/>
          <Field className="inputAuth" name="password" type="text" placeholder="Пароль"/>
          <ErrorMessage name="password" component="p"/>
          <Field className="inputAuth" name="confirmPassword" type="text" placeholder="Підтвердіть пароль" />
          <ErrorMessage name="confirmPassword" component="p"/>
          <button className="buttonAuth" type="submit">Зареєструватися</button>
        </StyledForm>
      </Formik>
    </>
  );
};

export default RegisterForm;
