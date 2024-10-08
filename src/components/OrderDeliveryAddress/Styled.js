import styled from "styled-components";

export const StyledOrderDeliveryAddress = styled.div`
 padding-bottom:10px;
  display: flex;
  flex-direction: column;
  
  
  /* width:380px; */

   /* overflow-y: scroll;

    &::-webkit-scrollbar {
    width: 129px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.accentColor};
   
    
  } */

   

  .deliverAddressTitle {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
  }

  .addressInfoWrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .addressInfoText {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;

    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  @media (max-width: 564px) {
    width: 100%;

    .deliverAddressTitle {
      margin-bottom: 8px;
      font-size: 20px;
      text-decoration: underline;
      text-decoration-skip-ink: none;
    }

    .addressInfoWrapper {
      gap: 5px;
    }
  }
`;
