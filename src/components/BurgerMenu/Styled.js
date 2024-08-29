import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
  position: fixed;
  left: 20px;
  top: 55px;

  width: 271px;
  height: auto;
  border-radius: 10px;
  padding: 10px 20px 20px 20px;

  z-index: 1111;

  background: ${({ theme }) => theme.colors.primaryBgColor};
`;
