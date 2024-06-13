import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "src/redux/auth/operations";
import { RegisterSchema } from "src/schemas/RegisterSchema";
import { subscribeSentEmail } from "src/services/subscribeSentEmail";
import { InputCheckbox, LabelRegisterSubscribe, StyledForm } from "./Styled";
import EyeSlashIcon from "src/assets/images/eye-slash.svg?react";

const RegisterForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    if (isSubscribe) {
      subscribeSentEmail(values);
    }

    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
          email: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        <StyledForm>
           <label className="styledLabel">
            <Field
              className="inputAuth"
              name="email"
              type="text"
              placeholder="E-mail"
            />
            <ErrorMessage className="errorMessage" name="email" component="p" />
          </label>
          <label className="styledLabel">
            <Field
              className="inputAuth"
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

          <label className="styledLabel">
            <Field
              className="inputAuth"
              name="confirmPassword"
              type={confirmPassword ? "text" : "password"}
              placeholder="Підтвердіть пароль"
            />
            <EyeSlashIcon
              className="iconEye"
              onClick={() => {
                setConfirmPassword(!confirmPassword);
              }}
            />
            <ErrorMessage
              className="errorMessage"
              name="confirmPassword"
              component="p"
            />
          </label>
         
          <LabelRegisterSubscribe>
            <InputCheckbox
              type="checkbox"
              name="subscribe"
              checked={isSubscribe}
              onChange={(e) => setIsSubscribe(e.target.checked)}
            />
            Отримувати повідомлення про новинки, знижки, акціїї
          </LabelRegisterSubscribe>
          <button className="buttonAuth" type="submit">
            Зареєструватися
          </button>
        </StyledForm>
      </Formik>
    </>
  );
};

export default RegisterForm;
