import ForgotPasswordForm from "src/components/ForgotResetPasswordForms/ForgotPasswordForm";
import { WrapperForgotPassword, WrapperLinkBack } from "./Styled";
import TitleAuth from "src/components/TitleAuth/TitleAuth";
import ArrowLeft from "src/assets/images/arrowLeft.svg?react";
import { Link } from "react-router-dom";
import { routes } from "src/routes";

const ForgotPasswordPage = () => {
  return (
    <section>
       <WrapperLinkBack>
          <Link className="link" to={routes.LOGIN}>
            <ArrowLeft className="iconArrow" />
            <span className="spanBack"> Назад</span>
          </Link>
        </WrapperLinkBack>
      <WrapperForgotPassword>
       
        <TitleAuth title={"Відновлення паролю"} />
        <p className="description">
          Введіть свою електронну адресу, щоб отримати посилання <br /> для
          скидання пароля
        </p>
        <ForgotPasswordForm />
      </WrapperForgotPassword>
    </section>
  );
};

export default ForgotPasswordPage;
