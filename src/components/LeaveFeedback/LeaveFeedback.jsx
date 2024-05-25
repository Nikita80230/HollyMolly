import { Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import { sentFeedback } from "src/services/sentFeedback";
import FeedbacksStarRating from "../FeedbacksStarRating/FeedbacksStarRating";

import { WrapperFeedback } from "./Styled";

const LeaveFeedback = ({ productId }) => {
  const [hoverItem, setHoverItem] = useState();
  const ratingRef = useRef(null);
  return (
    <WrapperFeedback>
      <h1>Leave Feedback</h1>
      <Formik
        initialValues={{
          authorName: "",
          review: "",
          rating: 0,
        }}
        onSubmit={async (values, actions, { setSubmitting }) => {
          try {
            await sentFeedback(productId, values);
            setSubmitting(false);
            actions.resetForm();
          } catch (error) {
            console.error(error);
            setSubmitting(false);
          }
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className="formFeedback">
            <Field name="authorName" placeholder="name" />
            <Field
              as="textarea"
              name="review"
              placeholder="Leave your feedback"
            ></Field>
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
            <button type="submit" disabled={isSubmitting}>
              Надіслати
            </button>
          </Form>
        )}
      </Formik>
    </WrapperFeedback>
  );
};

export default LeaveFeedback;
