import { styled } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  width: 280px;
  height: 200px;
  padding: 32px 32px 40px 32px;
  
  box-shadow: inset 0 0 50px 0 rgba(169, 181, 237, 0.3),
    0 4px 20px 0 rgba(4, 9, 34, 0.15);
  background: ${({ theme }) => theme.colors.primaryBgColor};

  @media only screen and (min-width: 768px) {
    padding: 32px 32px 40px 32px;
    width: 653px;
    height: 170px;
  }

  .title {
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 18px;

    color: ${({ theme }) => theme.colors.descriptionModal};

    @media only screen and (min-width: 768px) {
      margin-bottom: 16px;
      font-size: 32px;
    }
  }

  .description {
    font-family: ${({ theme }) => theme.fonts.familyRoboto};
    font-weight: 400;
    font-size: 10px;
    color: ${({ theme }) => theme.colors.descriptionModal};

    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  .buttonModal {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: transparent;
   
    
    @media only screen and (min-width: 768px) {
      top: 30px;
      right: 30px;
    }
  }
`;
