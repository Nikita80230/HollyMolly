import { ErrorMessage, Field, Form, Formik } from "formik";
import { ResetPasswordSchema } from "src/schemas/ResetPasswordSchema";
import { resetPassword } from "src/services/resetPassword";
import { StyledForm } from "./Styled";

const ResetPasswordForm = ({ token, userId }) => {
  const onSubmit = (values, actions) => {
    resetPassword({
      credentials: { newPassword: values.password, resetToken: token, userId },
    });
    actions.resetForm();
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
          <Field className="inputAuth" name="password" placeholder="New password" type="text" />
          <ErrorMessage component="p" name="password" />
          <button className="buttonAuth" type="submit">Змінити пароль</button>
        </StyledForm>
      </Formik>
    </>
  );
};

export default ResetPasswordForm;
