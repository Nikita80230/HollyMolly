import { styled } from "styled-components";

export const StyledSearchHeaderBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  max-width: 182px;
  width: 100%;

  padding-bottom: 8px;
  background: transparent;
  border: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryTxtColor};

  .searchIcon {
    width: 24px;
    height: 24px;
  }

  .placeholder {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;

    color: ${({ theme }) => theme.colors.placeholderTxtColor};
    white-space: nowrap;
  }

  .input {
    min-height: 24px;

    padding-bottom: 5px;

    outline: none;
    border: none;

    transition: all 0.3s;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    background-color: transparent;

    &:not(:placeholder-shown) + .placeholder {
      transform: translateY(-28px);
      font-family: ${({ theme }) => theme.fonts.familyDidact};
      font-weight: 400;
      font-size: 20px;
      line-height: 1.2;
    }
  }
  .validationError {
    position: absolute;
    top: 120%;
    left: 0;

    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.colors.colorError};
  }

  /* ============================================================================ */

   @media (max-width: 768px) {
  gap: 2px;

  max-width: 145px;
  width: 100%;

  padding-bottom: 5px;
  
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.primaryTxtColor};


  .placeholder {
    font-size: 16px;
    line-height: 1.25;
  }

  .input {
    min-height: 34px;

    padding-bottom: 7px;

    font-size: 16px;
    line-height: 1.25;
   

    &:not(:placeholder-shown) + .placeholder {
     
      font-size: 16px;
      line-height: 1.25;
    }
  }
 

   }

  /* @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 140px;
    width: 100%;

    gap: 12px;

    .placeholder {
      font-size: 10px;
    }

    .searchIcon {
      width: 16px;
    }
  } */

  /* ==============Mobile - @media (max-width: 564px)======================== */

  @media (max-width: 564px) {
    gap: 30px;
    max-width: max-content;
    width: 100%;
    max-width: 295px;
    height: 41px;
    margin-bottom: 30px;
    padding: 12px 0px 0px 0px;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.primaryTxtColor};

    .placeholder {
      font-size: 14px;
      line-height: 1.21429;
    }

    .input {
      font-size: 14px;
      line-height: 1.21429;
    }

    .searchIcon {
      width: 20px;
      height: 20px;
      path {
        stroke: ${({ theme }) => theme.colors.placeholderTxtColor};
      }
    }
  }
`;
