
import Header from "../Header/Header";
import { StyledAuthPageLayout } from "./Styled";

const AuthPageLayout = ({ children }) => {
    return (<StyledAuthPageLayout>
        <Header />
        <main>
               <div>{children}</div>
        </main>

    </StyledAuthPageLayout>)
}

export default AuthPageLayout;