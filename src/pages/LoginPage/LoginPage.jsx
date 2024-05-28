import { Link } from "react-router-dom";
import LoginForm from "src/components/AuthForms/LoginForm";
import GoogleAuth from "src/components/GoogleAuth/GoogleAuth";
import { routes } from "src/routes";
import { WrapperLogin } from "./Styled";

const LoginPage = () => {
  return (
    <WrapperLogin>
      <h1 className="titleLogin">З поверненням!</h1>
      <p className="descriptionLogin">Введіть дані свого облікового запису</p>
      <LoginForm />
      <GoogleAuth />
      <p className="textLogin">
        Ще не маєте аккаунту?
        <Link className="linkLogin" to={routes.REGISTER}>Зареєструйтесь!</Link>
      </p>
    </WrapperLogin>
  );
};

export default LoginPage;
