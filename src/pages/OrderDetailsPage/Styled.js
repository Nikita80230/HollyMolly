import styled from "styled-components";

export const StyledOrderDetailsPage = styled.div`
  .statusAndDeliveryContainer {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    gap:300px;
    
  }

  @media (max-width: 564px) {
    .statusAndDeliveryContainer {
      flex-direction: column;
      justify-content: flex-start;
      gap:24px;
    }
  }
`;
