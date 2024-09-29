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

    .filterAndSortingButtonsWrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 16px;
    }

    .filterButton {
      display: flex;
      align-items: center;

      max-width: 150px;
      width: 100%;
      height: 40px;

      padding: 11px 10px;

      border-radius: 10px;

      font-family: ${({ theme }) => theme.fonts.familyGaramond};
      font-weight: 400;
      font-size: 14px;

      /* line-height: 17px; */
      line-height: 1.21429;
      text-align: center;
      color: ${({ theme }) => theme.colors.primaryTxtColor};

      border: 1px solid ${({ theme }) => theme.colors.secondaryTxtColor};
      background: ${({ theme }) => theme.colors.whiteTxtColor};
    }
    .filterButtonText {
      margin: 0 auto;

      font-weight: 400;
      font-size: 14px;

      line-height: 1.21429;
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.familyGaramond};
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }
`;
