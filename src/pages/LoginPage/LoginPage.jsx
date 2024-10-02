import { Link } from "react-router-dom";
import LoginForm from "src/components/LoginForm/LoginForm";
import { routes } from "src/routes";
import { WrapperLogin } from "./Styled";
import authDesktop1x from "src/assets/images/auth/auth-1x.webp";
import authDesktop2x from "src/assets/images/auth/auth-2x.webp";
import TitleAuth from "src/components/TitleAuth/TitleAuth";
import ContainerAuth from "src/components/ContainerAuth/ContainerAuth";


const LoginPage = () => {
  return (
    <WrapperLogin>
      <ContainerAuth>
        <TitleAuth title={"Мій акаунт"} />
        <ul className="list">
          <li>
            <button type="button" className="buttonActive">
              {" "}
              Увійти
            </button>
          </li>
          <li>
            <Link to={routes.REGISTER}>
              <button type="button" className="buttonEnter">
                {" "}
                Реєстрація
              </button>
            </Link>
          </li>
        </ul>
        <div className="wrapperFormPhoto">
          <LoginForm />

          <img
            className="authPhoto"
            src={authDesktop1x}
            srcSet={`${authDesktop1x} 1x, ${authDesktop2x} 2x`}
            alt="Auth Photo"
          />
        </div>
        </ContainerAuth>
      </WrapperLogin>
  );
};

export default LoginPage;
