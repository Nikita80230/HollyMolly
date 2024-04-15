import Header from "../Header/Header";
import Container from "../Container/Container";

import { StyledPageLayout } from "./Styled";
import Footer from "../Footer/Footer";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../MobileHeader/MobileHeader";

const PageLayout = ({ children }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  // const isTablet = useMediaQuery({
  //   query: "(min-width: 565px) and (max-width: 1023px)",
  // });
  const isMobile = useMediaQuery({ query: "(max-width: 564px)" });

  return (
    <StyledPageLayout>
      {isMobile && <MobileHeader />}
      {isDesktop && <Header />}
      <main className="main">
        <Container>{children}</Container>
      </main>
      <Footer />
    </StyledPageLayout>
  );
};

export default PageLayout;
