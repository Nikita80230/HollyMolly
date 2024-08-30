import { styled } from "styled-components";

export const WrapperLinkBack = styled.div`
  margin-bottom: 120px;
  display: flex;
  align-items: center;

  .link {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .iconArrow {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }

  .spanBack {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  @media (max-width: 564px) {
    margin-bottom: 60px;
  }
`;

export const WrapperForgotPassword = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .description {
    margin-top: 10px;
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    text-align: center;
  }

  @media (max-width: 564px) {

    .description {
    margin-top: 8px;
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 1.125;
    
  }
  }
`;
