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
  StyledContainer,
  StyledForm,
  StyledLink,
} from "./Styled";
import EyeIcon from "src/assets/images/eye.svg?react";
import EyeSlashIcon from "src/assets/images/eye-closed.svg?react";
import { useState } from "react";
import GoogleAuth from "../GoogleAuth/GoogleAuth";

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <StyledContainer>
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
                placeholder="Твій email"
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
                placeholder="Твій пароль"
              />
            {passwordShown ? (
                <EyeIcon
                  className="iconEye"
                  onClick={() => setPasswordShown(false)}
                />
              ) : (
                <EyeSlashIcon
                  className="iconEye"
                  onClick={() => setPasswordShown(true)}
                />
              )}
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
             
            </ContainerCheckboxLink>
            <button className="buttonAuth" type="submit">
              LogIn
            </button>
          </StyledForm>
        )}
      </Formik>
      <GoogleAuth/>
       <StyledLink to={routes.FORGOT_PASSWORD}>
                Забули пароль?
              </StyledLink>
    </StyledContainer>
  );
};

export default LoginForm;
