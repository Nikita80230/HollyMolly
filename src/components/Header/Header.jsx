import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import SearchHeaderForm from "../SearchHeaderForm/SearchHeaderForm";
import CategoryBtn from "../CategoryBtn/CategoryBtn";
import Container from "../Container/Container";

import { routes } from "../../routes";

import DesktopLogo from "src/assets/images/logo.svg?react";
import TabletLogo from "src/assets/images/logoTablet.svg?react";
import MobileLogo from "src/assets/images/mobileLogo.svg?react";
import CloseBurgerMenuIcon from "src/assets/images/closeCrossIcon.svg?react";
import OpenBurgerIcon from "src/assets/images/openBurgerIcon.svg?react";

import { StyledHeader } from "./Styled";
import UserPanel from "../UserPanel/UserPanel";
import { useEffect, useState } from "react";
import HeaderSearchMenu from "../HeaderSearchMenu/HeaderSearchMenu";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const [isSearchMenuOpened, setIsMenuOpened] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 564px)" });
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isDesktop = useMediaQuery({ query: "(max-width: 1440px)" });

  const handleOpenSearchMenu = () => {
    setIsMenuOpened(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseSearchMenu = () => {
    setIsMenuOpened(false);
    document.body.style.overflow = "";
  };

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: document.querySelector(".header").offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isBurgerOpen || isSearchMenuOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isBurgerOpen, isSearchMenuOpened]);

  return (
    <StyledHeader>
      <Container>
        <div className="header">
          {isSearchMenuOpened && (
            <HeaderSearchMenu handleCloseSearchMenu={handleCloseSearchMenu} />
          )}
          <div className="leftHeader">
            {isDesktop && <CategoryBtn />}
            {isTablet && (
              <button
                type="button"
               className="tabletButton"
            onClick={toggleBurgerMenu} 
              >
                {isBurgerOpen ? (
                  <CloseBurgerMenuIcon
                    className="closeBurgerIcon"
                    style={{ display: "block" }}
                  />
                ) : (
                  <OpenBurgerIcon
                    className="openBurgerIcon"
                    style={{ display: "block" }}
                  />
                )}
              </button>
            )}
            <SearchHeaderForm handleOpenSearchMenu={handleOpenSearchMenu} />
          </div>
          <button
            type="button"
            className={`openBurgerBtn mobileButton ${
              isBurgerOpen ? "openedBurger" : ""
            }`}
            onClick={toggleBurgerMenu}
          >
            {isBurgerOpen ? (
              <CloseBurgerMenuIcon
                className="closeBurgerIcon"
                style={{ display: "block" }}
              />
            ) : (
              <OpenBurgerIcon
                className="openBurgerIcon"
                style={{ display: "block" }}
              />
            )}
          </button>
          <Link
            to={routes.HOME}
            className="headerLogo"
            onClick={handleScrollToTop}
          >
            <DesktopLogo className="headerDesktopLogoImg" />
            <TabletLogo className="headerTabletLogoImg" />
            <MobileLogo className="headerMobileLogoImg" />
          </Link>
          <UserPanel isMobile={isMobile} />
        </div>
      </Container>
      {isBurgerOpen && (
        <BurgerMenu
          toggleBurgerMenu={toggleBurgerMenu}
          handleCloseSearchMenu={handleCloseSearchMenu}
          handleOpenSearchMenu={handleOpenSearchMenu}
        />
      )}
    </StyledHeader>
  );
};

export default Header;
// {
/* <button
            type="button"
            className="openUserPanelBtn mobileButton"
            onClick={handleOpenUserPanel}
          >
            <OpenUserPanelIcon
              className="openUserPanelIcon"
              style={{ display: "block" }}
            />
          </button> */
// }

// const handleOpenUserPanel = () => {
//   setIsUserPanelOpen(!isUserPanelOpen);
// };
// const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);
