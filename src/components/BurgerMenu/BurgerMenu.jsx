import { createPortal } from "react-dom";
import { StyledBurgerMenu } from "./Styled";
import SearchHeaderForm from "../SearchHeaderForm/SearchHeaderForm";
import Container from "../Container/Container";
import MobileCategoriesList from "../MobileCategoriesList/MobileCategoriesList";

const BurgerMenu = ({ toggleBurgerMenu }) => {
  return createPortal(
    <StyledBurgerMenu>
      <Container>
        <SearchHeaderForm />
        <MobileCategoriesList toggleBurgerMenu={toggleBurgerMenu} />
      </Container>
    </StyledBurgerMenu>,
    document.querySelector("#portal")
  );
};

export default BurgerMenu;
