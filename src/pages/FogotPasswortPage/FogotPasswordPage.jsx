import ForgotPasswordForm from "src/components/AuthForms/ForgotPasswordForm";
import AuthPageLayout from "src/components/AuthPageLayout/AuthPageLayout";
import { WrapperForgotPassword } from "./Styled";
import ArrowIcon from "src/assets/images/turnBack.svg?react";
import { Link } from "react-router-dom";
import { routes } from "src/routes";

const ForgotPasswordPage = () => {
  return (
    <AuthPageLayout>
      <WrapperForgotPassword>
        <Link to={routes.LOGIN}>
          <ArrowIcon className="arrowIcon" />
        </Link>
        <h1 className="titleForgot">Відновлення паролю</h1>
        <p className="description">
          Введіть свою електронну адресу, щоб отримати посилання для скидання
          пароля
        </p>
        <ForgotPasswordForm />
      </WrapperForgotPassword>
    </AuthPageLayout>
  );
};

export default ForgotPasswordPage;
