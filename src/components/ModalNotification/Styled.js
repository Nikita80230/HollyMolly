import { styled } from "styled-components";

export const WrapperModal = styled.div`
  position: relative;
  padding: 42px 30px;
  border-radius: 10px;
  width: 443px;
  /* height: 149px; */
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
  box-shadow: 5px 5px 10px 0 #c0bfbf;

  .buttonModal {
    position: absolute;
    top: 13px;
    right: 13px;
    background-color: transparent;
    border: transparent;
    justify-content: center;
    align-items: center;
  }

  .iconClose {
    width: 24px;
    height: 24px;
    path {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }

  .description {
    font-weight: 400;
    font-size: 22px;
    line-height: 1.20833;
    text-align: center;
  }

  @media (max-width: 564px) {

  padding: 58px 20px;
  width: 100%;
  

  .buttonModal {
   
    top: 24px;
    right: 20px;
    
  }

  .description {
    font-size: 24px;
  }
  }
`;
