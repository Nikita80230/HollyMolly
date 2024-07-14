import ForgotPasswordForm from "src/components/ForgotResetPasswordForms/ForgotPasswordForm";
import { WrapperForgotPassword, WrapperLinkBack } from "./Styled";
import Container from "src/components/Container/Container";
import TitleAuth from "src/components/TitleAuth/TitleAuth";
import ArrowLeft from "src/assets/images/arrowLeft.svg?react";

const ForgotPasswordPage = () => {
  return (
    <section>
      <Container>
        <WrapperLinkBack>
          <ArrowLeft /> <span className="spanBack"> Назад</span>
        </WrapperLinkBack>
        <WrapperForgotPassword>
          <TitleAuth title={"Відновлення паролю"} />
          <p className="description">
            Введіть свою електронну адресу, щоб отримати посилання <br></br> для
            скидання пароля
          </p>
          <ForgotPasswordForm />
        </WrapperForgotPassword>
      </Container>
    </section>
  );
};

export default ForgotPasswordPage;
