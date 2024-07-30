import { Link } from "react-router-dom";
import { routes } from "src/routes";
import { WrapperConfirm } from "./Styled";

const ConfirmEmail = () => {
  return (
    <WrapperConfirm>
      <h1>Ваша пошта підтверджена</h1>
      <p>
        Щоб продовжити <Link to={routes.LOGIN}>Авторизуйтесь, будь ласка</Link>
      </p>
    </WrapperConfirm>
  );
};

export default ConfirmEmail;
