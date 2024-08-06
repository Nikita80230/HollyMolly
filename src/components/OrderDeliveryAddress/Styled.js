import styled from "styled-components";

export const StyledOrderDeliveryAddress = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 190px;

  .deliverAddressTitle {
    margin-bottom: 20px;
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
    /* text-align: center; */

    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
`;
