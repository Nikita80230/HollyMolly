import { createPortal } from "react-dom";
import { StyledBurgerMenu } from "./Styled";
import SearchHeaderForm from "../SearchHeaderForm/SearchHeaderForm";
import Container from "../Container/Container";
import MobileCategoriesList from "../MobileCategoriesList/MobileCategoriesList";
import { NavLink } from "react-router-dom";
import { routes } from "src/routes";

import UserAccountIcon from "../../assets/images/openUserPanelIcon.svg?react";

const BurgerMenu = ({ toggleBurgerMenu }) => {
  return createPortal(
    <StyledBurgerMenu>
      <Container>
        <SearchHeaderForm />
        <MobileCategoriesList toggleBurgerMenu={toggleBurgerMenu} />
        <NavLink
          className="accountLink"
          to={routes.PROFILE}
          onClick={toggleBurgerMenu}
        >
          <UserAccountIcon className="userAccountIcon icon" />
          <span className="userName">Аккаунт</span>
        </NavLink>
        <div className="burgerMenuBottom" onClick={toggleBurgerMenu}>
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
