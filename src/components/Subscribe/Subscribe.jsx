import Modal from "react-modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { SubscribeSchema } from "src/schemas/SubscribeSchema";
import { subscribeSentEmail } from "src/services/subscribeSentEmail";
import { SubscribeWrapper } from "./Styled";
import ModalSubscribe from "../ModalSubscribe/ModalSubscribe";

Modal.setAppElement("#root");

const Subscribe = () => {
  const [message, setMessage] = useState("");
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
      const resMessage = await subscribeSentEmail(values);

      if (resMessage === "✔  Ваша підписка вже активована") {
        setMessage(resMessage);
      } else {
        openModal();
      }

      actions.resetForm();
    } catch (error) {
      console.error(error);
      setMessage("Упс! Щось пішло не так.");
    }
  };

  return (
    <SubscribeWrapper>
      <h2 className="title">Підпишись на наші оновлення</h2>
      <p className="description">
        Підпишись на наші оновлення, щоб не пропустити знижки на улюблені товари
      </p>

      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={SubscribeSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors }) => (
          <Form className="subscribeEmailForm">
            <Field
              className={
                (errors.email ? " subscribeInputError " : "") +
                (values.email && !errors.email
                  ? "subscribeInputSuccess"
                  : "subscribeInput")
              }
              name="email"
              placeholder="Your email"
              type="text"
              autoComplete="username"
            />
            <ErrorMessage className="errorMessage" component="p" name="email" />
            { !errors.email ? (
              <p className="successMessage">{message}</p>
            ):( <p className="errorMessage">{message}</p>)}
            {values.email === "" ? (
              <button
                className="subscribeButtonDisabled"
                type="submit"
                disabled
              >
                Надіслати
              </button>
            ) : (
              <button className="subscribeButton" type="submit">
                Надіслати
              </button>
            )}
          </Form>
        )}
      </Formik>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel=" Modal"
      >
        <ModalSubscribe onClose={closeModal} />
      </Modal>
    </SubscribeWrapper>
  );
};

export default Subscribe;
