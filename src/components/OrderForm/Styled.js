import { styled } from "styled-components";

export const WrapperFormOrder = styled.div`
  padding-top: 36px;
  width: 830px;

  .styledForm {
    display: flex;
    flex-wrap: wrap;
    align-items: self-end;
    gap: 20px 50px;
    width: 100%;
  }

  .wrapperFields {
    /* margin-bottom:12px; */
    display: flex;
    gap: 50px;
  }

  .containerLeft {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .containerRight {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .styledLabel {
    position: relative;
    width: 390px;
    height: 60px;
  }

  .errorMessage {
    position: absolute;
    top: 100%;
    left: 0;
    color: ${({ theme }) => theme.colors.colorError};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.25;
  }

  .buttonSave {
    border: transparent;
    background-color: transparent;
    border-radius: 5px;
    padding: 10px 5px;
    height: 57px;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    transition: box-shadow ${({ theme }) => theme.animations.transition},
      color ${({ theme }) => theme.animations.transition};
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    }

    &:focus {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.accentColor};
    }
  }

  .containerIconSpan {
    margin-right: 300px;
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .circle {
    position: relative;
    width: 20px;
    height: 20px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 50%;
  }

  .point {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.accentColor};
    border-radius: 50%;
  }

  .text {
    font-weight: 400;
    font-size: 30px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
  .styledTooltip {
    background-color: ${({ theme }) => theme.colors.buttonBgDisabled};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  /* ==== Mobile max-width:564px=== */
  @media (max-width: 564px) {
    padding-top: 6px;
    min-width: 334px;
    width: 100%;

    .styledForm {
      width: 100%;
      gap: 16px 0;
    }

    .wrapperFields {
      flex-direction: column;
      width: 100%;
      gap: 16px;
    }

    .containerLeft {
      gap: 16px;
    }

    .containerRight {
      gap: 16px;
    }

    .styledLabel {
      width: 100%;
      height: 52px;
    }

    .errorMessage {
      font-size: 12px;
    }

    .buttonSave {
      padding: 12px 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 44px;
      width: 100%;
      font-size: 16px;
      line-height: 1.25;
    }

    .containerIconSpan {
      margin-right: 100px;
      gap: 16px;
    }

    .text {
      font-size: 16px;
      line-height: 1.25;
    }
  }
`;
