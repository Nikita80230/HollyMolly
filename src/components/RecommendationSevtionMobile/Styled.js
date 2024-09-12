import styled from "styled-components";

export const StyledSection = styled.section`
  margin-bottom: 24px;

  .titleRecommendation {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    white-space: nowrap;
  }

  .listCards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px 16px;
    /* display: flex;
  flex-wrap: wrap;
  gap: 15px;  */
  }
`;
