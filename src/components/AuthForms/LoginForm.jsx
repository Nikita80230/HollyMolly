import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "src/redux/auth/operations";
import { routes } from "src/routes";
import { FormSchema } from "src/schemas/FormSchema";
import { ContainerCheckboxLink, InputCheckbox, LabelRegisterSubscribe, StyledForm } from "./Styled";

const LoginForm = () => {

     const dispatch = useDispatch();

    const handleSubmit = (values,actions) => {
        dispatch(logIn(values));
        actions.resetForm()
    }
    return (
        <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        <StyledForm>
          <Field className="inputAuth" name="email" type="email" placeholder="E-mail" />
            <Field className="inputAuth" name="password" type="text" placeholder="Пароль" />
            <ContainerCheckboxLink>
            <LabelRegisterSubscribe>
            <InputCheckbox 
              type="checkbox"
              name="subscribe"
            />
            Запам'ятати мене
          </LabelRegisterSubscribe>
             <Link className="linkForgotPassword" to={routes.FORGOT_PASSWORD}>Забули пароль?</Link></ContainerCheckboxLink>
          <button className="buttonAuth" type="submit">LogIn</button>
        </StyledForm>
      </Formik>
    </>
        
    )
}

export default LoginForm;