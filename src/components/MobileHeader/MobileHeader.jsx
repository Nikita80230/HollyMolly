import { Link } from "react-router-dom";

import { routes } from "src/routes";

import Container from "../Container/Container";

import MobileLogo from "src/assets/images/mobileLogo.svg?react";
import OpenUserPanelIcon from "src/assets/images/openUserPanelIcon.svg?react";
import OpenBurgerIcon from "src/assets/images/openBurgerIcon.svg?react";

import { StyledMobileHeader } from "./Styled";
import { useState } from "react";

const MobileHeader = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);

  const handleOpenBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  const handleOpenUserPanel = () => {
    setIsUserPanelOpen(!isUserPanelOpen);
  };

  return (
    <StyledMobileHeader>
      <Container>
        <div className="mobileHeader">
          <button
            type="button"
            className="openBurgerBtn"
            onClick={handleOpenBurger}
          >
            <OpenBurgerIcon
              className="openBurgerIcon"
              style={{ display: "block" }}
            />
          </button>
          <Link to={routes.HOME} className="headerLogoLink">
            <MobileLogo />
          </Link>
          <button
            type="button"
            className="openUserPanelBtn"
            onClick={handleOpenUserPanel}
          >
            <OpenUserPanelIcon
              className="openUserPanelIcon"
              style={{ display: "block" }}
            />
          </button>
        </div>
      </Container>
    </StyledMobileHeader>
  );
};

export default MobileHeader;
