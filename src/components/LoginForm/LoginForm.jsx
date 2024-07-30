import { ErrorMessage, Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "src/redux/auth/operations";
import { routes } from "src/routes";
import { FormSchema } from "src/schemas/FormSchema";
import EyeIcon from "src/assets/images/eye.svg?react";
import EyeSlashIcon from "src/assets/images/eye-closed.svg?react";
import { useState } from "react";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import {
  ContainerCheckboxLink,
  InputCheckbox,
  LabelRegisterSubscribe,
  StyledContainer,
  StyledForm,
  StyledLink,
} from "./Styled";
import ButtonAuth from "../ButtonAuth/ButtonAuth";
import { toast } from "react-hot-toast";
import NotificationCustom from "../NotificationCustom/NotificationCustom";

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values)).unwrap();

      actions.resetForm();
    } catch (error) {
      if (error === "Request failed with status code 400") {
        toast.custom(
          <div className="custom-toast">
            <NotificationCustom title={"Невірний логін чи пароль"} />
          </div>,
          {
            duration: 5000,
          }
        );
      } else {
        toast.custom(
          <div className="custom-toast">
            <NotificationCustom title={"Сталася помилка при авторизації"} />
          </div>,
          {
            duration: 5000,
          }
        );
      }
    }
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
                className={`${
                  errors.email && touched.email
                    ? "inputError "
                    : values.email && !errors.email
                    ? "inputSuccess"
                    : "inputAuth"
                }`}
                name="email"
                type="text"
                placeholder="Твій email"
                autoComplete="off"
              />
              <ErrorMessage
                className="errorMessage"
                name="email"
                component="p"
              />
            </label>
            <label className="styledLabel">
              <Field
                className={`${
                  errors.password && touched.password
                    ? "inputError "
                    : values.password && !errors.password
                    ? "inputSuccess"
                    : "inputAuth"
                }`}
                name="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Введіть пароль"
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
            <ButtonAuth title={"Увійти"} width={"310px"} />
          </StyledForm>
        )}
      </Formik>
      <GoogleAuth />
      <StyledLink to={routes.FORGOT_PASSWORD}>Забули пароль?</StyledLink>
    </StyledContainer>
  );
};

export default LoginForm;
