import styled from "styled-components";

export const StyledCatalogPage = styled.div`
  .layout {
    display: grid;
    grid-template-areas:
      "s s s s s s"
      "f p p p p p";

    grid-template-columns: minmax(200px, 306px) 1fr;
  }

  .sorting {
    grid-area: s;

    margin-left: auto;
  }
  .filters {
    grid-area: f;
    /* max-width: 306px;
    width: 100%; */
  }
  .productsGrid {
    grid-area: p;
  }
`;
