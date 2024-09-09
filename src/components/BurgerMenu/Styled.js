import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
  position: fixed;
  left: 20px;
  top: 63px;

  width: 335px;
  height: auto;
  border-radius: 10px;
  padding: 10px 0 20px 0;

  z-index: 1111;

  background: ${({ theme }) => theme.colors.primaryBgColor};
  box-shadow: ${({ theme }) => theme.shadows.boxShadowCategoryModal};
`;
