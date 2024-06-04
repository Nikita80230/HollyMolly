import { ErrorMessage, Field, Form, Formik } from "formik";
import { ResetPasswordSchema } from "src/schemas/ResetPasswordSchema";
import { resetPassword } from "src/services/resetPassword";
import { StyledForm } from "./Styled";
import EyeSlashIcon from "src/assets/images/eye-slash.svg?react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "src/routes";

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
        <StyledForm>
          <label className="styledLabel">
            <Field
              className="inputAuth"
              name="password"
              placeholder="New password"
              type={passwordShown ? "text" : "password"}
            />
            <EyeSlashIcon
              className="iconEye"
              onClick={() => {
                setPasswordShown(!passwordShown);
              }}
            />
            <ErrorMessage className="errorMessage" component="p" name="password" />
          </label>
          <button className="buttonAuth" type="submit">
            Змінити пароль
          </button>
        </StyledForm>
      </Formik>
    </>
  );
};

export default ResetPasswordForm;
