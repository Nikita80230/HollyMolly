import ForgotPasswordForm from "src/components/AuthForms/ForgotPasswordForm";
import AuthPageLayout from "src/components/AuthPageLayout/AuthPageLayout";
import { WrapperForgotPassword } from "./Styled";

const ForgotPasswordPage = () => {
  return (
    <AuthPageLayout>
      <WrapperForgotPassword>
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
