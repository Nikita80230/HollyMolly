import { useLocation } from "react-router-dom";
import ResetPasswordForm from "src/components/ForgotResetPasswordForms/ResetPasswordForm";

import { WrapperResetPassword } from "./Styled";
import Container from "src/components/Container/Container";
import TitleAuth from "src/components/TitleAuth/TitleAuth";

const ResetPasswordPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
  const token = searchParams.get("token");

  return (
    <Container>
      <WrapperResetPassword>
        <TitleAuth title={"Оновлення паролю"} />
        <p className="description">Введіть свій новий пароль</p>
        <ResetPasswordForm token={token} userId={userId} />
      </WrapperResetPassword>
    </Container>
  );
};

export default ResetPasswordPage;
