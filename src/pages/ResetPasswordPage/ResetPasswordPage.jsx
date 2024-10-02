import { useLocation } from "react-router-dom";
import ResetPasswordForm from "src/components/ForgotResetPasswordForms/ResetPasswordForm";

import { WrapperResetPassword } from "./Styled";
import TitleLong from "src/components/TitleLong/TitleLong";
import ContainerAuth from "src/components/ContainerAuth/ContainerAuth";

const ResetPasswordPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
  const token = searchParams.get("token");

  return (
    <WrapperResetPassword>
      <ContainerAuth>
      <TitleLong title={"Оновлення паролю"} />
      <p className="description">Введіть свій новий пароль</p>
      <ResetPasswordForm token={token} userId={userId} />
      </ContainerAuth>
    </WrapperResetPassword>
  );
};

export default ResetPasswordPage;
