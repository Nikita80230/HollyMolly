import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { SubscribeSchema } from "src/schemas/SubscribeSchema";
import { subscribeSentEmail } from "src/services/subscribeSentEmail";
import { SubscribeEmailWrapper, SubscribeWrapper } from "./Styled";

const Subscribe = () => {
  const onSubmit = (values, actions) => {
    subscribeSentEmail(values);
    actions.resetForm();
  };

  return (
    <SubscribeWrapper>
      <h2 className="title">Підпишись на наші оновлення</h2>
      <p className="description">
        Підпишись на наші оновлення щоб не пропустити знижки на улюблені товари
      </p>
      <SubscribeEmailWrapper>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={SubscribeSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Field
              className="subscribeInput"
              name="email"
              placeholder="Your email"
              type="email"
              autoComplete="username"
            />
            <ErrorMessage className="errorMessage" component="p" name="email" />

            <button className="subscribeButton" type="submit">
              Надіслати
            </button>
          </Form>
        </Formik>
      </SubscribeEmailWrapper>
    </SubscribeWrapper>
  );
};

export default Subscribe;
