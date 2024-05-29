import { Link } from "react-router-dom";

import SearchHeaderForm from "../SearchHeaderForm/SearchHeaderForm";
import CategoryBtn from "../CategoryBtn/CategoryBtn";
import Container from "../Container/Container";

import { routes } from "../../routes";

import DesktopLogo from "../../assets/images/logo.svg?react";
import MobileLogo from "src/assets/images/mobileLogo.svg?react";
import CloseBurgerMenuIcon from "src/assets/images/closeCrossIcon.svg?react";
import OpenBurgerIcon from "src/assets/images/openBurgerIcon.svg?react";

import { StyledHeader } from "./Styled";
// import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import UserPanel from "../UserPanel/UserPanel";
import { useEffect, useState } from "react";
import HeaderSearchMenu from "../HeaderSearchMenu/HeaderSearchMenu";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const [isSearchMenuOpened, setIsMenuOpened] = useState(false);

  const handleOpenSearchMenu = () => {
    setIsMenuOpened(true);
  };

  const handleCloseSearchMenu = () => {
    setIsMenuOpened(false);
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
    if (isBurgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isBurgerOpen]);

  return (
    <StyledHeader>
      <Container>
        <div className="header">
          {isSearchMenuOpened && (
            <HeaderSearchMenu handleCloseSearchMenu={handleCloseSearchMenu} />
          )}
          <div className="leftHeader">
            <CategoryBtn />
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

            <MobileLogo className="headerMobileLogoImg" />
          </Link>
          <UserPanel />
        </div>
      </Container>
      {isBurgerOpen && <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />}
    </StyledHeader>
  );
};

export default Header;
{
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
}

// const handleOpenUserPanel = () => {
//   setIsUserPanelOpen(!isUserPanelOpen);
// };
// const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);
