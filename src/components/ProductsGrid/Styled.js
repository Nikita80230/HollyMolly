import styled from "styled-components";

export const StyledProductsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 21px;

  width: 100%;
  /* height: 2480px; */
  overflow: hidden;

  @media (max-width: 564px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 564px;
  }
`;
