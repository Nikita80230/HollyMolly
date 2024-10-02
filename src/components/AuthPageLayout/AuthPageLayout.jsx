import Header from "../Header/Header";
import { StyledAuthPageLayout } from "./Styled";

const AuthPageLayout = ({ children }) => {
  return (
    <StyledAuthPageLayout>
      <Header />
      <main className="styledMain">{children}</main>
    </StyledAuthPageLayout>
  );
};

export default AuthPageLayout;
