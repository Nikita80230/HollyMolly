import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "src/redux/auth/operations";
import { RegisterSchema } from "src/schemas/RegisterSchema";
import { subscribeSentEmail } from "src/services/subscribeSentEmail";
import { InputCheckbox, LabelRegisterSubscribe, StyledForm } from "./Styled";
import EyeSlashIcon from "src/assets/images/eye-slash.svg?react"

const RegisterForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const [isSubscribe, setIsSubscribe] = useState(false);

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    if (isSubscribe) {
      subscribeSentEmail(values);
    }

    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        <StyledForm>
          <Field
            className="inputAuth"
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <ErrorMessage name="email" component="p" />
          <LabelRegisterSubscribe>
            <InputCheckbox 
              type="checkbox"
              name="subscribe"
              checked={isSubscribe}
              onChange={(e) => setIsSubscribe(e.target.checked)}
            />
            Отримувати повідомлення про новинки, знижки, акціїї
          </LabelRegisterSubscribe>
          <label className="styledLabel">
          <Field
            className="inputAuth"
            name="password"
            type={ passwordShown? "text" :"password"}
            placeholder="Пароль"
          />
            <EyeSlashIcon className="iconEye" onClick={()=>{setPasswordShown(!passwordShown)} } />
          <ErrorMessage name="password" component="p" /></label>
          
          <label className="styledLabel"><Field
            className="inputAuth"
            name="confirmPassword"
            type={passwordShown ? "text" : "password"}
            placeholder="Підтвердіть пароль"
          />
            <EyeSlashIcon className="iconEye" onClick={()=>{setPasswordShown(!passwordShown)} } />
          <ErrorMessage name="confirmPassword" component="p" /></label>
          <button className="buttonAuth" type="submit">
            Зареєструватися
          </button>
        </StyledForm>
      </Formik>
    </>
  );
};

export default RegisterForm;
