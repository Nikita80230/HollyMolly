import { Link } from "react-router-dom";
import TitleLong from "src/components/TitleLong/TitleLong";
import { routes } from "src/routes";
import { WrapperConfirm } from "./Styled";

const ConfirmEmailPage = () => {
  return (
    <WrapperConfirm>
      <TitleLong title={"Ваша пошта підтверджена"} />
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
