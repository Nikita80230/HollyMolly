import FooterNavigation from "../FooterNavigation/FooterNavigation";
import Container from "../Container/Container";
import { StyledFooter } from "./Styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="wrapperFooter">
          <FooterNavigation />
          <p className="text">@ 2024 , All Rights Reserved</p>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
