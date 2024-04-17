import styled from "styled-components";

export const StyledCategoryBtn = styled.div`
  margin-right: 40px;

  .openCategoryBtn {
    display: flex;
    align-items: center;

    padding: 10px 10px 10px 0;

    background-color: transparent;
    border: none;
  }

  .text {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    margin-right: 15px;
  }
`;
