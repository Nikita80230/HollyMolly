import { Link } from "react-router-dom";
import ContainerAuth from "src/components/ContainerAuth/ContainerAuth";
import { routes } from "src/routes";
import { WrapperConfirm } from "./Styled";

const ConfirmEmailPage = () => {
  return (
    <WrapperConfirm>
      <ContainerAuth>
      <h1 className="title">Ваша пошта підтверджена</h1>
      <p className="description">
        Щоб продовжити{" "}
        <Link to={routes.LOGIN} className="link">
          Авторизуйтесь
        </Link>
        , будь ласка
        </p>
        </ContainerAuth>
    </WrapperConfirm>
  );
};

export default ConfirmEmailPage;
