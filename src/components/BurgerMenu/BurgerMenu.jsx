import { createPortal } from "react-dom";
import { StyledBurgerMenu } from "./Styled";
import SearchHeaderForm from "../SearchHeaderForm/SearchHeaderForm";
import Container from "../Container/Container";
import MobileCategoriesList from "../MobileCategoriesList/MobileCategoriesList";
import { useLocation } from "react-router-dom";
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
      </Container>
    </StyledBurgerMenu>,
    document.querySelector("#portal")
  );
};

export default BurgerMenu;
