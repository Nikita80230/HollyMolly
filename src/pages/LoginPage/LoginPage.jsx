import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import LoginForm from "src/components/AuthForms/LoginForm";

import ButtonLogOut from "src/components/LogOut/ButtonLogOut";
import { selectUser } from "src/redux/auth/selectors";

import { routes } from "src/routes"
import { Wrapper } from "./Styled";

const LoginPage = () => {
    const { user } = useSelector(selectUser);
    console.log(user);
    return (
    <Wrapper>
     <LoginForm />
            <Link to={routes.REGISTER}>Перейти на Register</Link>
            <button>Ввійти через Google</button>
            <button>Забули пароль?</button>
            <ButtonLogOut />
            
    </Wrapper>
    
    );
};
 
export default LoginPage;