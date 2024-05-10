import { ErrorMessage, Field, Form, Formik } from "formik";
import { SubscribeSchema } from "src/schemas/SubscribeSchema";
import { subscribeSentEmail } from "src/services/subscribeSentEmail";
import { SubscribeWrapper } from "./Styled";

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
 
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={SubscribeSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors }) => (
            <Form>
              <Field
                className={
                  (errors.email ? " subscribeInputError " : "") +
                  (values.email && !errors.email
                    ? "subscribeInputSuccess"
                    : "subscribeInput")
                }
                name="email"
                placeholder="Your email"
                type="email"
                autoComplete="username"
              />
              <ErrorMessage
                className="errorMessage"
                component="p"
                name="email"
              />
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
      </SubscribeWrapper>
    
  );
};

export default Subscribe;
