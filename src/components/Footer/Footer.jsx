import Subscribe from "../Subscribe/Subscribe";
import { FooterContainer, LowerBlock } from "./Styled";

import Container from "../Container/Container";
import FooterNavigation from "../FooterNavigation/FooterNavigation";

const Footer = () => {
  return (
    <footer>
      <Subscribe />
      {/* <Container> */}
        <FooterContainer>
        <FooterNavigation />
         <p className="text">@ 2024 , All Rights Reserved</p></FooterContainer>
      {/* </Container> */}
      {/* <LowerBlock>
        <p className="text">@ 2024 , All Rights Reserved</p>
        <ul className="lower-links">
          <li>
            {" "}
            <p className="text">Terms & Conditions</p>
          </li>
          <li>
            {" "}
            <p className="text">Privacy Policy</p>
          </li>
        </ul>
      </LowerBlock> */}
    </footer>
  );
};

export default Footer;
