import { ErrorMessage, Field, Form, Formik } from "formik";

import { ForgotPasswordSchema } from "src/schemas/ForgotPasswordSchema";
import { forgotPassword } from "src/services/forgotPassword";
import { StyledForm } from "./Styled";



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
        <StyledForm>
          <Field className="inputAuth" name="email" placeholder="Your email" type="email" />
          <ErrorMessage component="p" name="email" />
          <button className="buttonAuth" type="submit">Надіслати</button>
        </StyledForm>
      </Formik>
    </>
  );
};

export default ForgotPasswordForm;
