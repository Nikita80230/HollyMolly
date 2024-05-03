import { useLocation, useParams } from "react-router-dom";
import ResetPasswordForm from "src/components/ResetPasswordForm.jsx/ResetPasswordForm";

const ResetPasswordPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
  const token = searchParams.get("token");

  return (
    <>
      <h1>RESET PASSWORD</h1>
      <p>Введіть ваш новий пароль</p>
      <ResetPasswordForm token={token} userId={userId} />
    </>
  );
};

export default ResetPasswordPage;
