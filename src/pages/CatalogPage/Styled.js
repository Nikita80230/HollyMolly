import styled from "styled-components";

export const StyledCatalogPage = styled.div`
  margin-bottom: 60px;

  .layout {
    position: relative;
    display: grid;
    grid-template-areas:
      "s s s s s s"
      "f p p p p p"
      "pg pg pg pg pg pg";

    grid-template-columns: minmax(200px, 306px) 1fr;
  }

  .sorting {
    grid-area: s;

    margin-left: auto;
    margin-bottom: 20px;
  }
  .filters {
    margin-right: 47px;
    margin-bottom: 36px;
    grid-area: f;
    /* max-width: 306px;
    width: 100%; */
  }
  .productsGrid {
    grid-area: p;
    margin-bottom: 36px;
  }

  .buttonsPagination {
    grid-area: pg;
    width: 100%;
    margin-bottom: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 564px) {
    .layout {
      display: flex;
      flex-direction: column;
    }

    .sorting {
      margin-bottom: 0;
    }
  }
`;
