import { Link } from "react-router-dom";
import Container from "src/components/Container/Container";
import { routes } from "src/routes";
import { WrapperConfirm } from "./Styled";

const ConfirmEmail = () => {
    
    return (
        <Container>
            <WrapperConfirm>
                <h1>Ваша пошта підтверджена</h1>
                <p>Щоб продовжити <Link to={routes.LOGIN}>Авторизуйтесь, будь ласка</Link></p>
            </WrapperConfirm>
    </Container>)
}

export default ConfirmEmail;