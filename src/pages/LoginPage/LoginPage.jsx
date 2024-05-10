import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import LoginForm from "src/components/AuthForms/LoginForm";
import GoogleAuth from "src/components/GoogleAuth/GoogleAuth";

import ButtonLogOut from "src/components/LogOut/ButtonLogOut";
import { routes } from "src/routes"
import { Wrapper } from "./Styled";

const LoginPage = () => {
   
    return (
    <Wrapper>
     <LoginForm />
            <Link to={routes.REGISTER}>Перейти на Register</Link>
            <GoogleAuth/>
             <Link to={routes.FORGOT_PASSWORD}>Забули пароль?</Link>
            <ButtonLogOut />
            
    </Wrapper>
    
    );
};
 
export default LoginPage;