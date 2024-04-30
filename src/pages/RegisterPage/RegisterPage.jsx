import { Link } from "react-router-dom";
import RegisterForm from "src/components/AuthForms/RegisterForm";

import { routes } from "src/routes";
import { Wrapper } from "./Styled";

const RegisterPage = () => {
  return (
    <Wrapper>
      <RegisterForm />
      <Link to={routes.LOGIN}>Перейти на LogIn</Link>
      {/* <button>Ввійти через Google</button>
      <button>Забули пароль?</button> */}
    </Wrapper>
  );
};

export default RegisterPage;
