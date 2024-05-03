import Subscribe from "../Subscribe/Subscribe";
import {
  FooterNavigation,
  LowerBlock,
  SocialLink,
  StyledLink,
  StyledLowerLink,
  WrapperSocialLink,
} from "./Styled";
import Instagram from "../../assets/images/instagram.svg?react";
import Facebook from "../../assets/images/facebook.svg?react";
import Twitter from "../../assets/images/twitter.svg?react";
import Container from "../Container/Container";
import { routes } from "src/routes";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Subscribe />

        <FooterNavigation>
          <li className="footer-items">
            <h3 className="footer-title">Допомога</h3>
            <StyledLink>Відстеження товару</StyledLink>
            <StyledLink>Довідник розмірів</StyledLink>
            <StyledLink>FAQ</StyledLink>
          </li>
          <li className="footer-items">
            {" "}
            <h3 className="footer-title">Про нас</h3>
            <StyledLink to={routes.ABOUT}>Про нас</StyledLink>
            <StyledLink>Кар'єра</StyledLink>
            <StyledLink to= {routes.SUPPORT}>Допомога та підтримка</StyledLink>
          </li>
          <li className="footer-items">
            <h3 className="footer-title">Каталог</h3>
            <StyledLink>Головні убори</StyledLink>
            <StyledLink>Біжутерія</StyledLink>
            <StyledLink>Сумки</StyledLink>
            <StyledLink>Інше</StyledLink>
          </li>
          <li className="footer-items">
            <h3 className="footer-title">Соціальні мережі</h3>
            <WrapperSocialLink>
              <SocialLink
                to="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
                HollyMolly_Store
              </SocialLink>
            </WrapperSocialLink>
            <WrapperSocialLink>
              <SocialLink
                to="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
                Holly Molly Store
              </SocialLink>
            </WrapperSocialLink>
            <WrapperSocialLink>
              <SocialLink
                to="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
                Your Store_
              </SocialLink>
            </WrapperSocialLink>
          </li>
        </FooterNavigation>
      </Container>
      <LowerBlock>
        <p className="text">@ 2024 , All Rights Reserved</p>
        <ul className="lower-links">
          <li>
            {" "}
            <StyledLowerLink>Terms & Conditions</StyledLowerLink>
          </li>
          <li>
            {" "}
            <StyledLowerLink>Privacy Policy</StyledLowerLink>
          </li>
        </ul>
      </LowerBlock>
    </footer>
  );
};

export default Footer;
