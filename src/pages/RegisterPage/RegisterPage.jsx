import { Link } from "react-router-dom";
import RegisterForm from "src/components/AuthForms/RegisterForm";
import AuthPageLayout from "src/components/AuthPageLayout/AuthPageLayout";
import { routes } from "src/routes";
import {  WrapperRegister } from "./Styled";

const RegisterPage = () => {
  return (
    <AuthPageLayout>
      <WrapperRegister>
      <h1 className="titleAuth">Реєстрація</h1>
      <p className="description">Введіть свої дані, щоб зареєструватися</p>
      <RegisterForm />
      <p className="textAuth">
        Вже маєте аккаунт?
        <Link className="linkAuth" to={routes.LOGIN}>Увійдіть!</Link>
        </p>
        </WrapperRegister>
    </AuthPageLayout>
  );
};

export default RegisterPage;
