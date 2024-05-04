import { ErrorMessage, Field, Form, Formik } from "formik";
import { ForgotPasswordSchema } from "src/schemas/ForgotPasswordSchema";
import { forgotPassword } from "src/services/forgotPassword";

const ForgotPasswordForm = () => {
  const onSubmit = (values, actions) => {
    forgotPassword(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field name="email" placeholder="Your email" type="email" />
          <ErrorMessage component="p" name="email" />
          <button type="submit">Надіслати</button>
        </Form>
      </Formik>
    </>
  );
};

export default ForgotPasswordForm;
