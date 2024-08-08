import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "src/redux/auth/operations";
import { RegisterSchema } from "src/schemas/RegisterSchema";
import { subscribeSentEmail } from "src/services/subscribeSentEmail";
import EyeIcon from "src/assets/images/eye.svg?react";
import EyeSlashIcon from "src/assets/images/eye-closed.svg?react";
import ButtonAuth from "../ButtonAuth/ButtonAuth";
import { InputCheckbox, LabelRegisterSubscribe, StyledForm } from "./Styled";
import { toast } from "react-hot-toast";
import NotificationCustom from "../NotificationCustom/NotificationCustom";
import Modal from "react-modal";
import ModalNotification from "../ModalNotification/ModalNotification";
import { useNavigate } from "react-router-dom";
import { routes } from "src/routes";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "";
    navigate(routes.LOGIN);
  }

  const handleSubmit = async (values, actions) => {
    try {
      const result = await dispatch(register(values)).unwrap();

      if (result) {
        openModal();
      }
      if (isSubscribe) {
        subscribeSentEmail(values);
      }

      actions.resetForm();
    } catch (error) {
      if (error === "Request failed with status code 400") {
        toast.custom(
          <div className="custom-toast">
            <NotificationCustom title={"Такий користувач вже існує"} />
          </div>,
          {
            duration: 5000,
          }
        );
      } else {
        toast.custom(
          <div className="custom-toast">
            <NotificationCustom title={"Сталася помилка при реєстрації"} />
          </div>,
          {
            duration: 5000,
          }
        );
      }
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
          email: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        {({ values, touched, errors }) => (
          <StyledForm>
            <label className="styledLabel">
              <Field
                className={`${
                  errors.email && touched.email
                    ? "inputError "
                    : values.email && !errors.email
                    ? "inputSuccess"
                    : "inputAuth"
                }`}
                name="email"
                type="text"
                placeholder="Твій email"
                autoComplete="off"
              />
              <ErrorMessage
                className="errorMessage"
                name="email"
                component="p"
              />
            </label>
            <label className="styledLabel">
              <Field
                className={`${
                  errors.password && touched.password
                    ? "inputError "
                    : values.password && !errors.password
                    ? "inputSuccess"
                    : "inputAuth"
                }`}
                name="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Введіть пароль"
              />
              {passwordShown ? (
                <EyeIcon
                  className="iconEye"
                  onClick={() => setPasswordShown(false)}
                />
              ) : (
                <EyeSlashIcon
                  className="iconEye"
                  onClick={() => setPasswordShown(true)}
                />
              )}
              <ErrorMessage
                className="errorMessage"
                name="password"
                component="p"
              />
            </label>
            <label className="styledLabel">
              <Field
                className={`${
                  errors.confirmPassword && touched.confirmPassword
                    ? "inputError "
                    : values.confirmPassword && !errors.confirmPassword
                    ? "inputSuccess"
                    : "inputAuth"
                }`}
                name="confirmPassword"
                type={confirmPassword ? "text" : "password"}
                placeholder="Повторіть пароль"
              />
              {confirmPassword ? (
                <EyeIcon
                  className="iconEye"
                  onClick={() => setConfirmPassword(false)}
                />
              ) : (
                <EyeSlashIcon
                  className="iconEye"
                  onClick={() => setConfirmPassword(true)}
                />
              )}
              <ErrorMessage
                className="errorMessage"
                name="confirmPassword"
                component="p"
              />
            </label>
            <LabelRegisterSubscribe>
              <InputCheckbox
                type="checkbox"
                name="subscribe"
                checked={isSubscribe}
                onChange={(e) => setIsSubscribe(e.target.checked)}
              />
              Отримувати повідомлення про акції,<br></br> знижки, новинки
            </LabelRegisterSubscribe>
            <ButtonAuth title={"Зареєструватися"} width={"310px"} />
          </StyledForm>
        )}
      </Formik>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="modal-content-register"
        overlayClassName="modal-overlay"
        contentLabel="Modal Register"
      >
        <ModalNotification
          message={
            "Щоб підтвердити реєстрацію, перейдіть за посиланням з поштової скриньки."
          }
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default RegisterForm;
