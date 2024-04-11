import { Subscribe } from "../Subscribe/Subscribe";
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

const Footer = () => {
  return (
    <footer>
      <Container>
        <Subscribe />

        <FooterNavigation>
          <li className="footer-items">
            <h3 className="footer-title">Help</h3>
            <StyledLink>Delivery Tracking</StyledLink>
            <StyledLink>Sizes guide</StyledLink>
            <StyledLink>Sale FAQ</StyledLink>
          </li>
          <li className="footer-items">
            {" "}
            <h3 className="footer-title">About Us</h3>
            <StyledLink>About Us</StyledLink>
            <StyledLink>Career</StyledLink>
            <StyledLink>Blog</StyledLink>
          </li>
          <li className="footer-items">
            <h3 className="footer-title">Catalog</h3>
            <StyledLink>Bags</StyledLink>
            <StyledLink>Jewelry</StyledLink>
            <StyledLink>Headgear</StyledLink>
            <StyledLink>Another</StyledLink>
          </li>
          <li className="footer-items">
            <h3 className="footer-title">Follow us</h3>
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
