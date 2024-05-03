import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { resetPassword } from "src/services/resetPassword";

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(25, "Password must be at most 25 characters")
    .matches(
      /^[A-Za-z0-9~`!@#$%^&*()_\-+={[}\]|:;'<,>.?/ ]*$/,
      "Password must contain only letters, numbers, or optional special characters"
    )
    .required("This field is required"),
});

const ResetPasswordForm = ({ token, userId }) => {
  const onSubmit = (values, action) => {
    resetPassword({
      credentials: { newPassword: values.password, resetToken: token, userId },
    });
    action.resetForm();
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
