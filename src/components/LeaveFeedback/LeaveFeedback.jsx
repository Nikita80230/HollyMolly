import { Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import { sentFeedback } from "src/services/sentFeedback";
import FeedbacksStarRating from "../FeedbacksStarRating/FeedbacksStarRating";
import CloseIcon from "src/assets/images/close.svg?react";
import { WrapperFeedback } from "./Styled";

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
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className="formFeedback">
            <Field
              name="authorName"
              placeholder="Ваше ім'я"
              className="inputName"
            />
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
            </label>
            <Field
              as="textarea"
              name="review"
              placeholder="Ваш відгук"
              className="textarea"
            ></Field>

            <button
              type="submit"
              disabled={isSubmitting}
              className="buttonReview"
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
