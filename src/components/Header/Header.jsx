import { Link } from "react-router-dom";

import SearchHeaderForm from "../SearchHeaderForm/SearchHeaderForm";
import CategoryBtn from "../CategoryBtn/CategoryBtn";
import Container from "../Container/Container";

import { routes } from "../../routes";

import DesktopLogo from "../../assets/images/logo.svg?react";

import { StyledHeader } from "./Styled";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import UserPanel from "../UserPanel/UserPanel";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div className="header">
          <CategoryBtn />
          <SearchHeaderForm />
          <Link to={routes.HOME} className="headerLogo">
            <DesktopLogo className="headerLogoImg" />
          </Link>
          <LanguageSwitcher />
          <UserPanel />
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
