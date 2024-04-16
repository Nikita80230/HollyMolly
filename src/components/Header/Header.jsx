import { Link } from "react-router-dom";

import SearchHeaderForm from "../SearchHeaderForm/SearchHeaderForm";
import CategoryBtn from "../CategoryBtn/CategoryBtn";
import Container from "../Container/Container";

import { routes } from "../../routes";

import DesktopLogo from "../../assets/images/logo.svg?react";
import MobileLogo from "src/assets/images/mobileLogo.svg?react";
import OpenUserPanelIcon from "src/assets/images/openUserPanelIcon.svg?react";
import OpenBurgerIcon from "src/assets/images/openBurgerIcon.svg?react";

import { StyledHeader } from "./Styled";
// import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import UserPanel from "../UserPanel/UserPanel";
import { useState } from "react";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);

  const handleOpenBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  const handleOpenUserPanel = () => {
    setIsUserPanelOpen(!isUserPanelOpen);
  };
  return (
    <StyledHeader>
      <Container>
        <div className="header">
          <div className="leftHeader">
            <CategoryBtn />
            <SearchHeaderForm />
          </div>
          <button
            type="button"
            className="openBurgerBtn mobileButton"
            onClick={handleOpenBurger}
          >
            <OpenBurgerIcon
              className="openBurgerIcon"
              style={{ display: "block" }}
            />
          </button>
          <Link to={routes.HOME} className="headerLogo">
            <DesktopLogo className="headerDesktopLogoImg" />
            <MobileLogo className="headerMobileLogoImg" />
          </Link>
          <UserPanel />
          <button
            type="button"
            className="openUserPanelBtn mobileButton"
            onClick={handleOpenUserPanel}
          >
            <OpenUserPanelIcon
              className="openUserPanelIcon"
              style={{ display: "block" }}
            />
          </button>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
