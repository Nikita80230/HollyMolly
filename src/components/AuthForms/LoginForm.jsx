import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "src/redux/auth/operations";
import { FormSchema } from "src/schemas/FormSchema";
import { StyledForm } from "./Styled";

const LoginForm = () => {

     const dispatch = useDispatch();

    const handleSubmit = (values,actions) => {
        dispatch(logIn(values));
        actions.resetForm()
    }
    return (
        <>
        <h1>LogIn</h1>
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
          <button type="submit">LogIn</button>
        </StyledForm>
      </Formik>
    </>
        
    )
}

export default LoginForm;