import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { forgotPassword } from "src/services/forgotPassword";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required("This field is required"),
});

const ForgotPasswordForm = () => {
  const onSubmit = (values, form) => {
    forgotPassword(values);
    form.resetForm();
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
