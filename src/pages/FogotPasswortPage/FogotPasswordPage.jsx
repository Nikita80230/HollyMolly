import ForgotPasswordForm from "src/components/ForgotResetPasswordForms/ForgotPasswordForm";
import { WrapperForgotPassword, WrapperLinkBack } from "./Styled";
import ArrowLeft from "src/assets/images/arrowLeft.svg?react";
import { Link } from "react-router-dom";
import { routes } from "src/routes";
import TitleLong from "src/components/TitleLong/TitleLong";

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
       
        <TitleLong title={"Відновлення паролю"} />
        <p className="description">
          Введіть свою електронну адресу, щоб отримати  <br /> посилання для
          скидання пароля
        </p>
        <ForgotPasswordForm />
      </WrapperForgotPassword>
    </section>
  );
};

export default ForgotPasswordPage;
