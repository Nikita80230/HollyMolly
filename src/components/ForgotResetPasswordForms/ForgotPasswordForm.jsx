import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Modal from "react-modal";
import IconClose from "src/assets/images/close.svg?react";
import { ForgotPasswordSchema } from "src/schemas/ForgotPasswordSchema";
import { forgotPassword } from "src/services/forgotPassword";
import ButtonAuth from "../ButtonAuth/ButtonAuth";
import NotificationCustom from "../NotificationCustom/NotificationCustom";
import { StyledForm, WrapperModal } from "./Styled";

const ForgotPasswordForm = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "";
  }

  const onSubmit = async (values, actions) => {
    try {
      const result = await forgotPassword(values);
      if (result && result.status === 204) {
        openModal();
      } else {
        toast.custom(
          <div className="custom-toast">
            <NotificationCustom title={"Щось пішло не так. Спробуйте ще раз"} />
          </div>,
          {
            duration: 5000,
          }
        );
        throw new Error("Unexpected API response");
      }

      actions.resetForm();
    } catch (error) {
      toast.custom(
        <div className="custom-toast">
          <NotificationCustom title={"Такий користувач не зареєстрований"} />
        </div>,
        {
          duration: 5000,
        }
      );
    }
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
        {({ errors, touched, values }) => (
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
            <ButtonAuth title={"Відправити"} width={"100%"} />
          </StyledForm>
        )}
      </Formik>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="modal-content-forgot"
        overlayClassName="modal-overlay"
        contentLabel="Modal Forgot Password"
      >
        <WrapperModal>
          <button className="buttonModal" type="button" onClick={closeModal}>
            <IconClose className="iconClose" />
          </button>
          <p className="description">
            Щоб завершити зміну пароля перейдіть за посиланням з поштової
            скриньки
          </p>
        </WrapperModal>
      </Modal>
    </>
  );
};

export default ForgotPasswordForm;
