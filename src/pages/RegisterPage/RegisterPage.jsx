import { Link } from "react-router-dom";
import RegisterForm from "src/components/AuthForms/RegisterForm";
import GoogleAuth from "src/components/GoogleAuth/GoogleAuth";
import { routes } from "src/routes";
import { Wrapper } from "./Styled";

const RegisterPage = () => {
  
 
  
  return (
    <Wrapper>
      <RegisterForm />
      <Link to={routes.LOGIN}>Якщо ви вже реєструвались</Link>
     < GoogleAuth/>
      <Link to={routes.FORGOTPASSWORD}>Забули пароль?</Link>
      
      <button>Запам'ятати мене</button>
    </Wrapper>
  );
};

export default RegisterPage;
