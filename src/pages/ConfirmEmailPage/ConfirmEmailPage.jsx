import { Link } from "react-router-dom";
import { routes } from "src/routes";

const ConfirmEmail = () => {
    return (
        <>
            <h1>Ваша пошта підтверджена</h1>
            <p>щоб пiдтвердити реєстрацію перейдіть на <Link to={routes.LOGIN}>УВІЙТИ</Link></p>
            
    </>)
}

export default ConfirmEmail;