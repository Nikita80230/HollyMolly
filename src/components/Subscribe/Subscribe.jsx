import Modal from "react-modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { SubscribeSchema } from "src/schemas/SubscribeSchema";
import { subscribeSentEmail } from "src/services/subscribeSentEmail";
import { SubscribeWrapper } from "./Styled";
import ModalSubscribe from "../ModalSubscribe/ModalSubscribe";
import Container from "../Container/Container";



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

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const resMessage = await subscribeSentEmail(values);

      if (resMessage === "✔  Ваша підписка вже активована") {
        setMessage(resMessage);
      } else {
        openModal();
      }

      resetForm();
      setSubmitting(false);
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (error) {
      console.error(error);
      setMessage("Упс! Щось пішло не так.");
      setSubmitting(false);
    }
  };

  return (
    <SubscribeWrapper>
      <Container>
        <div className="containerSubscribe">
      <h2 className="title">Підпишись на наші оновлення:</h2>
      <p className="description">
        Так ти завжди будеш в курсі останніх новин, отримувати <br></br>спеціальні
        пропозиції та першою дізнаватися про акції та нові <br></br> товари
      </p>

      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={SubscribeSchema}
        onSubmit={onSubmit}
      >
        {({ values, touched, errors, isSubmitting }) => (
          <Form className="subscribeEmailForm">
            <Field
              className={
                (errors.email && touched.email ? " subscribeInputError " : "") +
                (values.email && !errors.email
                  ? "subscribeInputSuccess"
                  : "subscribeInput")
              }
              name="email"
              placeholder="Your email"
              type="text"
              autoComplete="off"
            />
            <ErrorMessage className="errorMessage" component="p" name="email" />
            {!errors.email ? (
              <p className="successMessage">{message}</p>
            ) : (
              <p className="errorMessage">{message}</p>
            )}
            {values.email === "" ? (
              <button
                className="subscribeButtonDisabled"
                type="submit"
                disabled
              >
                Підписатися
              </button>
            ) : (
              <button
                className="subscribeButton"
                type="submit"
                disabled={isSubmitting}
              >
                Підписатися
              </button>
            )}
          </Form>
        )}
      </Formik></div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Modal Subscription"
      >
        <ModalSubscribe onClose={closeModal} />
        </Modal>
        </Container>
      </SubscribeWrapper>
  );
};

export default Subscribe;
