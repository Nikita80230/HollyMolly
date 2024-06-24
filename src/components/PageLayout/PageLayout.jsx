import Header from "../Header/Header";

import { StyledPageLayout } from "./Styled";
import Footer from "../Footer/Footer";

const PageLayout = ({ children }) => {
  return (
    <StyledPageLayout>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </StyledPageLayout>
  );
};

export default PageLayout;
