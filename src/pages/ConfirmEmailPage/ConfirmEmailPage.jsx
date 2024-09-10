import { Link } from "react-router-dom";
import { routes } from "src/routes";
import { WrapperConfirm } from "./Styled";

const ConfirmEmailPage = () => {
  return (
    <WrapperConfirm>
      <h1 className="title">Ваша пошта підтверджена</h1>
      <p className="description">
        Щоб продовжити{" "}
        <Link to={routes.LOGIN} className="link">
          Авторизуйтесь
        </Link>
        , будь ласка
      </p>
    </WrapperConfirm>
  );
};

export default ConfirmEmailPage;
