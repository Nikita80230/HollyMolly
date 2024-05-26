import {
  FooterNavigationList,
  SocialLink,
  StyledLink,
  WrapperSocialLink,
} from "./Styled";
import Instagram from "../../assets/images/instagram.svg?react";
import Facebook from "../../assets/images/facebook.svg?react";
import Twitter from "../../assets/images/twitter.svg?react";
import { routes } from "src/routes";
import { selectCategories } from "src/redux/categories/selectors";
import { useSelector } from "react-redux";

const FooterNavigation = () => {
  const categories = useSelector(selectCategories);

  return (
    <FooterNavigationList>
      <li className="footer-items">
        <h3 className="footer-title">Допомога</h3>
        <StyledLink to={routes.TRACKING}>Відстеження товару</StyledLink>
        <StyledLink to={routes.SIZE_GUIDE}>Довідник розмірів</StyledLink>
        <StyledLink>FAQ</StyledLink>
      </li>
      <li className="footer-items">
        {" "}
        <h3 className="footer-title">Про нас</h3>
        <StyledLink to={routes.ABOUT_US}>Про нас</StyledLink>
        <StyledLink>Кар'єра</StyledLink>
        <StyledLink to={routes.SUPPORT}>Допомога</StyledLink>
      </li>

      <li className="footer-items">
        <h3 className="footer-title">Каталог</h3>
        {categories.map((category) => {
          if (category.id <= 4) {
            return (
              <StyledLink to={`${routes.CATALOG_PAGE}/${category.id}`} key={category.id}>
                {" "}
                {category.name}
              </StyledLink>
            );
          }
        })}
      </li>

      <li className="footer-items">
        <h3 className="contacts-title">Контакти</h3>
        <WrapperSocialLink>
          <SocialLink
            to="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="icon"/>
            HollyMolly_Store
          </SocialLink>
        </WrapperSocialLink>
        <WrapperSocialLink>
          <SocialLink
            to="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook  className="icon"/>
            Holly Molly Store
          </SocialLink>
        </WrapperSocialLink>
        <WrapperSocialLink>
          <SocialLink
            to="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="icon"/>
            Your Store_
          </SocialLink>
        </WrapperSocialLink>
      </li>
    </FooterNavigationList>
  );
};
export default FooterNavigation;
