import Container from "../Container/Container";

import ArrowRight from "../../assets/images/halfRightArrow.svg?react";
import { StyledHeader } from "./Styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div className="header">
          <div className="headerCategory">
            <button type="button">Category</button>
            <ArrowRight />
          </div>
          <p className="title">header</p>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
