import { ErrorMessage, Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "src/redux/auth/operations";
import { routes } from "src/routes";
import { FormSchema } from "src/schemas/FormSchema";
import {
  ContainerCheckboxLink,
  InputCheckbox,
  LabelRegisterSubscribe,
  StyledForm,
} from "./Styled";
import EyeSlashIcon from "src/assets/images/eye-slash.svg?react";
import { useState } from "react";

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <StyledForm>
            <label className="styledLabel">
              <Field
                  className={(errors.email && touched.email ? "inputError " : "inputAuth")}
                name="email"
                type="text"
                placeholder="E-mail"
              />{" "}
              <ErrorMessage
                className="errorMessage"
                name="email"
                component="p"
              />
            </label>
            <label className="styledLabel">
              <Field
                  className={(errors.password && touched.password ? "inputError " : "inputAuth")}
                name="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Пароль"
              />
              <EyeSlashIcon
                className="iconEye"
                onClick={() => {
                  setPasswordShown(!passwordShown);
                }}
              />
              <ErrorMessage
                className="errorMessage"
                name="password"
                component="p"
              />
            </label>
            <ContainerCheckboxLink>
              <LabelRegisterSubscribe>
                <InputCheckbox
                  type="checkbox"
                  name="rememberMe"
                  checked={values.rememberMe}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Запам'ятати мене
              </LabelRegisterSubscribe>
              <Link className="linkForgotPassword" to={routes.FORGOT_PASSWORD}>
                Забули пароль?
              </Link>
            </ContainerCheckboxLink>
            <button className="buttonAuth" type="submit">
              LogIn
            </button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
