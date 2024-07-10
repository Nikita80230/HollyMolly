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
        }}
        validationSchema={ResetPasswordSchema}
        onSubmit={onSubmit}
      >
        {({ touched, errors }) => (
          <StyledForm>
            <label className="styledLabel">
              <Field
                className={
                  errors.password && touched.password
                    ? "inputError "
                    : "inputAuth"
                }
                name="password"
                placeholder="New password"
                type={passwordShown ? "text" : "password"}
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
                component="p"
                name="password"
              />
            </label>
            <ButtonAuth title={"Надіслати" } width={"390px"} />
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default ResetPasswordForm;
