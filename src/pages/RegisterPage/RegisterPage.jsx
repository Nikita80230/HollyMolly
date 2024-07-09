import { Link } from "react-router-dom";
import RegisterForm from "src/components/RegisterForm/RegisterForm";
import { routes } from "src/routes";
import { WrapperRegister } from "./Styled";
import authDesktop1x from "src/assets/images/auth/auth-1x.webp";
import authDesktop2x from "src/assets/images/auth/auth-2x.webp";
import Container from "src/components/Container/Container";
import TitleAuth from "src/components/TitleAuth/TitleAuth";

const RegisterPage = () => {
  return (
    <Container>
      <WrapperRegister>
        <TitleAuth title={"Мій акаунт"} />
        <ul className="list">
          <li>
            <Link to={routes.LOGIN}>
              <button type="button" className="buttonEnter">
                {" "}
                Увійти
              </button>
            </Link>
          </li>
          <li>
            <button type="button" className="buttonActive">
              {" "}
              Реєстрація
            </button>
          </li>
        </ul>
        <div className="wrapperFormPhoto">
          <RegisterForm />
          <img
            className="authPhoto"
            src={authDesktop1x}
            srcSet={`${authDesktop1x} 1x, ${authDesktop2x} 2x`}
            alt="Auth Photo"
          />
        </div>
      </WrapperRegister>
    </Container>
  );
};

export default RegisterPage;
