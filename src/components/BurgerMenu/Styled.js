import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
  position: fixed;
  left: 0;
  top: 64px;

  width: 100vw;
  height: calc(100vh - 64px);

  padding-top: 25px;

  /* border: 2px solid red; */

  z-index: 10;

  background: ${({ theme }) => theme.colors.primaryBgColor};
`;
