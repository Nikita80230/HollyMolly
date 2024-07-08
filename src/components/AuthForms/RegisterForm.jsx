import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "src/redux/auth/operations";
import { RegisterSchema } from "src/schemas/RegisterSchema";
import { subscribeSentEmail } from "src/services/subscribeSentEmail";
import { InputCheckbox, LabelRegisterSubscribe, StyledForm } from "./Styled";
import EyeIcon from "src/assets/images/eye.svg?react";
import EyeSlashIcon from "src/assets/images/eye-closed.svg?react";

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
          password: '',
          confirmPassword: '',
          email: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        {({ values, touched, errors }) => (
          <StyledForm>
            <label className="styledLabel">
              <Field
                className={`${
                  errors.email && touched.email
                    ? 'inputError '
                    : values.email && !errors.email
                    ? 'inputSuccess'
                    : 'inputAuth'
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
                    ? 'inputError '
                    : values.password && !errors.password
                    ? 'inputSuccess'
                    : 'inputAuth'
                }`}
                name="password"
                type={passwordShown ? 'text' : 'password'}
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
            <label className="styledLabel">
              <Field
                 className={`${
                  errors.confirmPassword && touched.confirmPassword
                    ? 'inputError '
                    : values.confirmPassword && !errors.confirmPassword
                    ? 'inputSuccess'
                    : 'inputAuth'
                }`}
                name="confirmPassword"
                type={confirmPassword ? 'text' : 'password'}
                placeholder="Повторіть пароль"
              />
              {confirmPassword ? (
                <EyeIcon
                  className="iconEye"
                  onClick={() => setConfirmPassword(false)}
                />
              ) : (
                <EyeSlashIcon
                  className="iconEye"
                  onClick={() => setConfirmPassword(true)}
                />
              )}
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
              Отримувати повідомлення про акції,<br></br> знижки, новинки
            </LabelRegisterSubscribe>
            <button className="buttonAuth" type="submit">
              Зареєструватися
            </button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;