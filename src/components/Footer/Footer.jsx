import { FooterContainer, LowerBlock } from "./Styled";
import FooterNavigation from "../FooterNavigation/FooterNavigation";

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <FooterNavigation />
        <p className="text">@ 2024 , All Rights Reserved</p>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
