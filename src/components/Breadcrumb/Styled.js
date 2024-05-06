import styled from "styled-components";

export const StyledBreadcrumb = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  padding: 40px 0;

  .mainLink {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #000;
  }

  .linksDivider {
  }

  .currentLink {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #818181;
    /* cursor: text; */
    pointer-events: none;
  }
`;
