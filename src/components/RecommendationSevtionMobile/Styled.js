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
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px 16px;
    width: 100%;
    overflow: hidden;
  }
  @media (max-width: 1239px) {
    margin-bottom: 32px;

    .titleRecommendation {
      margin-bottom: 24px;
      font-size: 30px;
    }

    .listCards {
      grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
    }
  }
`;
