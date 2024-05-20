import styled from "styled-components";

export const StyledCatalogPage = styled.div`
  .layout {
    display: grid;
    grid-template-areas:
      "s s s s s s"
      "f p p p p p"
      "pg pg pg pg pg pg";

    grid-template-columns: minmax(200px, 306px) 1fr;
    margin-bottom: 130px;
  }

  .sorting {
    grid-area: s;

    margin-left: auto;
    margin-bottom: 20px;
  }
  .filters {
    margin-right: 30px;
    grid-area: f;
    /* max-width: 306px;
    width: 100%; */
  }
  .productsGrid {
    grid-area: p;
    margin-bottom: 78px;
  }

  .buttonsPagination {
    grid-area: pg;
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${({ theme }) => theme.colors.borderPagination};
  }
  .buttonPrevNext {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors.borderPagination};
    width: 56px;
    height: 42px;
    background-color: transparent;
  }
`;
