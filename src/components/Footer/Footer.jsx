import Subscribe from "../Subscribe/Subscribe";
import { LowerBlock, StyledLowerLink } from "./Styled";

import Container from "../Container/Container";
import FooterNavigation from "../FooterNavigation/FooterNavigation";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Subscribe />
        <FooterNavigation />
      </Container>
      <LowerBlock>
        <p className="text">©HollyMolly 2024</p>
        <ul className="lower-links">
          <li>
            {" "}
            <p className="text">Privacy Policy</p>
          </li>
          <li>
            {" "}
            <p className="text">Public offer</p>
          </li>
        </ul>
      </LowerBlock>
    </footer>
  );
};

export default Footer;
