import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import { sentFeedback } from "src/services/sentFeedback";
import FeedbacksStarRating from "../FeedbacksStarRating/FeedbacksStarRating";
import CloseIcon from "src/assets/images/close.svg?react";
import { WrapperFeedback } from "./Styled";
import { LeaveFeedbackSchema } from "src/schemas/LeaveFeedbackSchema";

const LeaveFeedback = ({ productId, onClose }) => {
  const [hoverItem, setHoverItem] = useState();
  const ratingRef = useRef(null);
  return (
    <WrapperFeedback>
      <button type="button" className="buttonClose" onClick={onClose}>
        <CloseIcon className="iconClose" />
      </button>
      <h2 className="title">Ваша думка важлива для нас</h2>
      <Formik
        initialValues={{
          authorName: "",
          review: "",
          rating: 0,
        }}
        validationSchema={LeaveFeedbackSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await sentFeedback(productId, values);
            setSubmitting(false);
            resetForm();
          } catch (error) {
            console.error(error);
            setSubmitting(false);
          }
        }}
      >
        {({ values, setFieldValue, isSubmitting, errors, touched }) => (
          <Form className="formFeedback">
            <label className="labelName">
              <Field
                name="authorName"
                placeholder="Ваше ім'я"
                className={`inputName ${
                  errors.authorName && touched.authorName ? "inputError" : ""
                }`}
              />
              <ErrorMessage
                name="authorName"
                component="p"
                className="errorName"
              />
            </label>
            <label className="labelRating">
              Рейтинг:
              <Field
                className="inputRange"
                id="rangeValue"
                name="rating"
                type="range"
                min="1"
                max="5"
                onChange={(rating) => setFieldValue("rating", rating)}
                innerRef={ratingRef}
              />
              <FeedbacksStarRating
                value={values.rating}
                onChange={(rating) => setFieldValue("rating", rating)}
                hoverItem={hoverItem}
                setHoverItem={setHoverItem}
              />
              <ErrorMessage
                name="rating"
                component="p"
                className="errorRating"
              />
            </label>
            <label className="labelReview">
              <Field
                as="textarea"
                name="review"
                placeholder="Ваш відгук"
                className={`textarea ${
                  errors.review && touched.review ? "inputError" : ""
                }`}
              />
              <ErrorMessage
                name="review"
                component="p"
                className="errorReview"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="buttonReview"
              onClick={onClose}
            >
              Надіслати
            </button>
          </Form>
        )}
      </Formik>
    </WrapperFeedback>
  );
};

export default LeaveFeedback;
