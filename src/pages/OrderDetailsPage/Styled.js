import styled from "styled-components";

export const StyledOrderDetailsPage = styled.div`
  .statusAndDeliveryContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 564px) {
    .statusAndDeliveryContainer {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap:24px;
    }
  }
`;
