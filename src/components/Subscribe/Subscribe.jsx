import { ErrorMessage, Field, Form, Formik } from "formik";
import { subscribeSentEmail } from "src/services/subscribeSentEmail";
import * as Yup from "yup";
import { SubscribeEmailWrapper, SubscribeWrapper } from "./Styled";

const subscribeSchema = Yup.object().shape({
  email: Yup.string().email().required("This field is required"),
});

const Subscribe = () => {
  const onSubmit = (values, form) => {
    subscribeSentEmail(values);
    form.resetForm();
  };

  return (
    <SubscribeWrapper>
      <h2 className="title">Підпишись на наші оновлення</h2>
      <p className="description">
        Підпишіться на наші оновлення щоб не пропусти знижки на улюблені
        товари
      </p>
      <SubscribeEmailWrapper>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={subscribeSchema}
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
