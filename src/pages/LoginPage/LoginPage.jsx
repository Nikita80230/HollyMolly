import { Link } from "react-router-dom";
import LoginForm from "src/components/AuthForms/LoginForm";
import GoogleAuth from "src/components/GoogleAuth/GoogleAuth";
import { routes } from "src/routes";
import { WrapperLogin } from "./Styled";
import authDesktop1x from "src/assets/images/auth/auth-1x.webp";
import authDesktop2x  from "src/assets/images/auth/auth-2x.webp";

const LoginPage = () => {
  return (
    
    <WrapperLogin>
      <h1 className="titleLogin">Мій акаунт</h1>
      <ul className="list">
        <li>
         
            <button type="button" className="buttonActive">
              {" "}
              Увійти
            </button>
         
        </li>
        <li>
         <Link  to={routes.REGISTER}>
          <button type="button" className="buttonEnter">
            {" "}
            Реєстрація
          </button></Link>
        </li>
      </ul>
      <div className="wrapperFormPhoto">
      <LoginForm />
      {/* <GoogleAuth /> */}
      <img 
          className="authPhoto" 
          src={authDesktop1x} 
          srcSet={`${authDesktop1x} 1x, ${authDesktop2x} 2x`} 
          alt="Auth Photo"
        /></div>
    </WrapperLogin>
  );
};

export default LoginPage;
