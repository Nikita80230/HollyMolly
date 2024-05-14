import { createPortal } from "react-dom";
import { StyledBurgerMenu } from "./Styled";
import SearchHeaderForm from "../SearchHeaderForm/SearchHeaderForm";
import Container from "../Container/Container";
import MobileCategoriesList from "../MobileCategoriesList/MobileCategoriesList";
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "src/routes";

import UserAccountIcon from "../../assets/images/openUserPanelIcon.svg?react";
import { useEffect, useRef } from "react";

const BurgerMenu = ({ toggleBurgerMenu }) => {
  const isFirstRenderRef = useRef(true);
  const location = useLocation();

  useEffect(() => {
    if (isFirstRenderRef.current)
      return () => {
        isFirstRenderRef.current = false;
      };
    toggleBurgerMenu();
  }, [location, toggleBurgerMenu]);

  return createPortal(
    <StyledBurgerMenu>
      <Container>
        <SearchHeaderForm />
        <MobileCategoriesList />
        <NavLink className="accountLink" to={routes.PROFILE}>
          <UserAccountIcon className="userAccountIcon icon" />
          <span className="userName">Аккаунт</span>
        </NavLink>
        <div className="burgerMenuBottom">
          <div className="leftColumn column">
            <NavLink className="link" to={routes.HOME}>
              Розсилка
            </NavLink>
            <NavLink className="link" to={routes.HOME}>
              Допомога
            </NavLink>
          </div>
          <div className="rightColumn column">
            <NavLink className="link" to={routes.HOME}>
              Про нас
            </NavLink>
            <NavLink className="link" to={routes.HOME}>
              Соціальні мережі
            </NavLink>
          </div>
        </div>
      </Container>
    </StyledBurgerMenu>,
    document.querySelector("#portal")
  );
};

export default BurgerMenu;
