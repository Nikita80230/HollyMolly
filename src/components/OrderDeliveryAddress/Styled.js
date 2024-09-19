import styled from "styled-components";

export const StyledOrderDeliveryAddress = styled.div`
  display: flex;
  flex-direction: column;

  width: max-content;

  .deliverAddressTitle {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
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

  @media (max-width: 564px) {
    width: 100%;

    .deliverAddressTitle {
      margin-bottom: 8px;
      text-decoration: underline;
      text-decoration-skip-ink: none;
    }

    .addressInfoWrapper {
      gap: 5px;
    }
  }
`;
