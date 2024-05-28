import { useLocation} from "react-router-dom";
import ResetPasswordForm from "src/components/AuthForms/ResetPasswordForm";
import AuthPageLayout from "src/components/AuthPageLayout/AuthPageLayout";

import { WrapperResetPassword } from "./Styled";

const ResetPasswordPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
  const token = searchParams.get("token");

  return (
    <AuthPageLayout>
      <WrapperResetPassword>
        <h1 className="titleReset">Оновлення паролю</h1>
      <p className="description">Введіть ваш новий пароль</p>
        <ResetPasswordForm token={token} userId={userId} />
        </WrapperResetPassword>
    </AuthPageLayout>
    
  );
};

export default ResetPasswordPage;
