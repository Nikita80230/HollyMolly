import { ErrorMessage, Field, Formik } from "formik";
import { ResetPasswordSchema } from "src/schemas/ResetPasswordSchema";
import { resetPassword } from "src/services/resetPassword";
import { StyledForm } from "./Styled";
import EyeIcon from "src/assets/images/eye.svg?react";
import EyeSlashIcon from "src/assets/images/eye-closed.svg?react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "src/routes";
import ButtonAuth from "../ButtonAuth/ButtonAuth";

const ResetPasswordForm = ({ token, userId }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    const success = await resetPassword({
      credentials: { newPassword: values.password, resetToken: token, userId },
    });
    actions.resetForm();
    if (success.status === 204) {
      navigate(routes.LOGIN);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        validationSchema={ResetPasswordSchema}
        onSubmit={onSubmit}
      >
        {({ values, touched, errors }) => (
          <StyledForm>
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
            <label className="styledLabel">
              <Field
                className={`${
                  errors.confirmPassword && touched.confirmPassword
                    ? "inputError "
                    : values.confirmPassword && !errors.confirmPassword
                    ? "inputSuccess"
                    : "inputAuth"
                }`}
                name="confirmPassword"
                type={confirmPassword ? "text" : "password"}
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
            <ButtonAuth title={"Оновити"} width={"100%"} />
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default ResetPasswordForm;
