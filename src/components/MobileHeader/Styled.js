import styled from "styled-components";

export const StyledMobileHeader = styled.header`
  margin-bottom: 25px;

  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  background: #fffbfe, rgba(103, 80, 164, 0.08);

  .mobileHeader {
    display: flex;
    align-items: center;

    min-height: 64px;
  }

  .headerLogoLink {
    margin: 0 auto;
  }

  .openBurgerBtn {
    display: block;
    padding: 0;
    border: none;
    background: transparent;
  }

  .openUserPanelBtn {
    display: block;
    padding: 0;

    border: none;
    background: transparent;
  }
`;
