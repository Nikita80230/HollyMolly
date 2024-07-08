import Container from "../Container/Container";
import Header from "../Header/Header";
import { StyledAuthPageLayout } from "./Styled";

const AuthPageLayout = ({ children }) => {
  return (
    <StyledAuthPageLayout>
      <Header />
      <main className="styledMain">
        <Container>{children}</Container>
      </main>
    </StyledAuthPageLayout>
  );
};

export default AuthPageLayout;
