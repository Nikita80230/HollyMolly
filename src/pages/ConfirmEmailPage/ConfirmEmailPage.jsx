import { Link } from "react-router-dom";
import TitleAuth from "src/components/TitleAuth/TitleAuth";
import { routes } from "src/routes";
import { WrapperConfirm } from "./Styled";

const ConfirmEmailPage = () => {
  return (
    <WrapperConfirm>
      <TitleAuth title={"Ваша пошта підтверджена"} />
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
