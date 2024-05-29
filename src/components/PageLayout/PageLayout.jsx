import Header from "../Header/Header";
import Container from "../Container/Container";

import { StyledPageLayout } from "./Styled";
import Footer from "../Footer/Footer";


const PageLayout = ({ children}) => {
  
  return (
    <StyledPageLayout>
      <Header />
      <main className="main">
        <Container>{children}</Container>
      </main>
      <Footer />
    </StyledPageLayout>
  );
};

export default PageLayout;
