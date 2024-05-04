import { ErrorMessage, Field, Form, Formik } from "formik";
import { ResetPasswordSchema } from "src/schemas/ResetPasswordSchema";
import { resetPassword } from "src/services/resetPassword";

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
        <Form>
          <Field name="password" placeholder="New password" type="text" />
          <ErrorMessage component="p" name="password" />
          <button type="submit">Змінити пароль</button>
        </Form>
      </Formik>
    </>
  );
};

export default ResetPasswordForm;
