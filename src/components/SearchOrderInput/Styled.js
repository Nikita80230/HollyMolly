import styled from "styled-components";

export const StyledSearchOrderInput = styled.div`
  .searchLabel {
    position: relative;

    display: flex;

    max-width: 308px;
    width: 100%;
    height: 41px;
  }
  .searchIcon {
    position: absolute;
    top: 9px;
    left: 0;
    path {
      stroke: ${({ theme }) => theme.colors.primaryTxtColor};
    }
    width: 24px;
    height: 24px;
  }
  .searchInput {
    width: 100%;

    padding-left: 34px;

    outline: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryTxtColor};

    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;

    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.primaryTxtColor};

    &::placeholder {
      font-family: ${({ theme }) => theme.fonts.familyGaramond};
      color: ${({ theme }) => theme.colors.placeholderTxtColor};

      font-weight: 400;
      font-size: 20px;
      line-height: 1.2;
    }
  }

  @media (max-width: 564px) {
    padding-top: 16px;

    .searchLabel {
      max-width: 564px;
      width: 100%;
    }

    .searchInput {
      width: 100%;
      &::placeholder {
        text-align: center;
      }
    }
  }
`;
