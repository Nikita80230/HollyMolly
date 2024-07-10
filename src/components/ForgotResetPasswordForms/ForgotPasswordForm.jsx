import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-hot-toast";

import { ForgotPasswordSchema } from "src/schemas/ForgotPasswordSchema";
import { forgotPassword } from "src/services/forgotPassword";
import ButtonAuth from "../ButtonAuth/ButtonAuth";
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
        <div className="custom-toast">
          Щось пішло не так. Спробуйте ще раз.
        </div>,
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
        validateOnBlur={true}
        validateOnChange={true}
      >
        {({ errors, touched, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <label className="styledLabel">
              <Field
                className={`inputAuth ${
                  errors.email && touched.email
                    ? "inputError"
                    : touched.email
                    ? "inputSuccess"
                    : ""
                }`}
                name="email"
                placeholder="Your email"
                type="text"
                autoComplete="off"
              />
              <ErrorMessage
                className="errorMessage"
                component="p"
                name="email"
              />
            </label>
            <ButtonAuth title={"Відправити"} width={"390px"} />
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default ForgotPasswordForm;
