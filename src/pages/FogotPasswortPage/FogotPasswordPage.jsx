import ForgotPasswordForm from "src/components/ForgotResetPasswordForms/ForgotPasswordForm";
import { WrapperForgotPassword } from "./Styled";
import Container from "src/components/Container/Container";
import TitleAuth from "src/components/TitleAuth/TitleAuth";

const ForgotPasswordPage = () => {
  return (
    <Container>
      <WrapperForgotPassword>
        <TitleAuth title={"Відновлення паролю"} />
        <p className="description">
          Введіть свою електронну адресу, щоб отримати посилання <br></br> для
          скидання пароля
        </p>
        <ForgotPasswordForm />
      </WrapperForgotPassword>
    </Container>
  );
};

export default ForgotPasswordPage;
