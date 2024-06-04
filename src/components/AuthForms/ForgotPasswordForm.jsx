import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-hot-toast";

import { ForgotPasswordSchema } from "src/schemas/ForgotPasswordSchema";
import { forgotPassword } from "src/services/forgotPassword";
import { StyledForm } from "./Styled";

const ForgotPasswordForm = () => {
  const onSubmit = async (values, actions) => {
    try {
      const result = await forgotPassword(values);
      
      if (result && result.status === 204) {
        toast.custom(
          <div className="custom-toast">
            Щоб завершити зміну пароля, перейдіть за посиланням з поштової
            скриньки
          </div>,
          {
            duration: 4000,
          }
        );
      } else {
        throw new Error("Unexpected API response");
      }
    } catch (error) {
      toast.custom(
        <div className="custom-toast">Щось пішло не так. Спробуйте ще раз.</div>,
        {
          duration: 4000,
        }
      );
    }
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
          <label className="styledLabel">
            <Field
              className="inputAuth"
              name="email"
              placeholder="Your email"
              type="text"
            />
            <ErrorMessage className="errorMessage" component="p" name="email" />
          </label>
          <button className="buttonAuth" type="submit">
            Надіслати
          </button>
        </StyledForm>
      </Formik>
    </>
  );
};

export default ForgotPasswordForm;
