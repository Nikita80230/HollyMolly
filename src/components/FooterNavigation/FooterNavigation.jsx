import {
  FooterNavigationList,
  SocialLink,
  StyledLink,
  WrapperFooterNavigation,
  WrapperSocialLink,
} from "./Styled";
import Instagram from "../../assets/images/instagram.svg?react";
import Facebook from "../../assets/images/facebook.svg?react";
import Twitter from "../../assets/images/twitter.svg?react";
import { routes } from "src/routes";
import { selectCategories } from "src/redux/categories/selectors";
import { useSelector } from "react-redux";
import ChevronRightIcon from "src/assets/images/chevron-right.svg?react";
import ChevronDownIcon from "src/assets/images/chevron-down .svg?react";
import { useEffect, useState } from "react";

const FooterNavigation = () => {
  const categories = useSelector(selectCategories);
  const [openContainer, setOpenContainer] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleToggleContainer = (containerId) => {
    setOpenContainer(openContainer === containerId ? null : containerId);
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WrapperFooterNavigation>
      <FooterNavigationList>
        <li className="footer-items">
          <div
            className="wrapper-title-footer-nav"
            onClick={() => handleToggleContainer("help")}
          >
            <h3 className="footer-title">Допомога</h3>
            {isMobile &&
              (openContainer === "help" ? (
                <ChevronRightIcon className="icon-chevron" />
              ) : (
                <ChevronDownIcon className="icon-chevron" />
              ))}
          </div>
          {(isMobile ? openContainer === "help" : true) && (
            <div>
              <StyledLink to={routes.TRACKING} onClick={handleLinkClick}>Відстеження товару</StyledLink>
              <StyledLink to={routes.SIZE_GUIDE}onClick={handleLinkClick}>Довідник розмірів</StyledLink>
              <StyledLink onClick={handleLinkClick}>FAQ</StyledLink>
            </div>
          )}
        </li>
        <li className="footer-items">
          {" "}
          <div
            className="wrapper-title-footer-nav"
            onClick={() => handleToggleContainer("aboutUs")}
          >
            <h3 className="footer-title">Про нас</h3>
            {isMobile &&
              (openContainer === "aboutUs" ? (
                <ChevronRightIcon className="icon-chevron" />
              ) : (
                <ChevronDownIcon className="icon-chevron" />
              ))}
          </div>
          {(isMobile ? openContainer === "aboutUs" : true) && (
            <div>
              <StyledLink to={routes.ABOUT_US} onClick={handleLinkClick}>Про нас</StyledLink>
              <StyledLink onClick={handleLinkClick}>Кар'єра</StyledLink>
              <StyledLink to={routes.SUPPORT} onClick={handleLinkClick}>Допомога</StyledLink>
            </div>
          )}
        </li>

        <li className="footer-items">
          <div
            className="wrapper-title-footer-nav"
            onClick={() => handleToggleContainer("catalog")}
          >
            <h3 className="footer-title">Каталог</h3>
            {isMobile &&
              (openContainer === "catalog" ? (
                <ChevronRightIcon className="icon-chevron" />
              ) : (
                <ChevronDownIcon className="icon-chevron" />
              ))}
          </div>

          {(isMobile ? openContainer === "catalog" : true) &&
            categories.map((category) => {
              if (category.id <= 4) {
                return (
                  <StyledLink
                    to={`${routes.CATALOG_PAGE}/${category.id}`}
                    key={category.id}
                    onClick={handleLinkClick}
                  >
                    {category.name}
                  </StyledLink>
                );
              }
              return null;
            })}
        </li>
        <li className="footer-items">
          <div
            className="contacts-title-wrapper"
            onClick={() => handleToggleContainer("contacts")}
          >
            <h3 className="footer-title">Контакти</h3>
            {isMobile &&
              (openContainer === "contacts" ? (
                <ChevronRightIcon className="icon-chevron" />
              ) : (
                <ChevronDownIcon className="icon-chevron" />
              ))}
          </div>
          {(isMobile ? openContainer === "contacts" : true) && (
            <div>
              <WrapperSocialLink>
                <SocialLink
                  to="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="icon" />
                  HollyMolly_Store
                </SocialLink>
              </WrapperSocialLink>
              <WrapperSocialLink>
                <SocialLink
                  to="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="icon" />
                  Holly Molly Store
                </SocialLink>
              </WrapperSocialLink>
              <WrapperSocialLink>
                <SocialLink
                  to="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="icon" />
                  Your Store_
                </SocialLink>
              </WrapperSocialLink>
            </div>
          )}
        </li>
      </FooterNavigationList>
    </WrapperFooterNavigation>
  );
};
export default FooterNavigation;
