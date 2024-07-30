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
    /* text-align: center; */

    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
`;
