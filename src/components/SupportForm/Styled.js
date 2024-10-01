import { Form } from "formik";
import { styled } from "styled-components";

export const SupportContainer = styled.div`
  position: relative;
  padding: 69px 66px;
  border-radius: 10px;
  width: 625px;
  height: 817px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowLeaveReview};
  background-color: ${({ theme }) => theme.colors.primaryBgColor};

  .buttonClose {
    position: absolute;
    top: 32px;
    right: 33px;
    border: transparent;
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
  }

  .styledIcon {
    width: 24px;
    height: 24px;
    path {
      fill: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }

  .titleSupport {
    margin-bottom: 24px;
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 45px;
    line-height: 1.2;
    text-align: center;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  @media (max-width: 564px) {
    padding: 60px 20px;
    border-radius: 0;
    width: 375px;
    height: 598px;

    .buttonClose {
      top: 29px;
      right: 20px;
    }

    .titleSupport {
      font-size: 24px;
      line-height: 1.16667;
    }
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .styledLabel {
    position: relative;
  }

  .styledLabelSelect {
    position: relative;
  }

  .fieldSelect {
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    outline: transparent;
    outline-offset: -1px;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:active {
      border: none;
    }
  }

  .labelTextarea {
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 5px;
    width: 100%;
    height: 182px;
    transition: border-color ${({ theme }) => theme.animations.transition};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.borderHoverColor};
    }
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.borderFocusColor};
    }
  }

  .fieldTextarea {
    padding: 16px 0px 16px 15px;
    width: 100%;
    height: 100%;
    border: transparent;
    outline: transparent;
    outline-offset: -1px;
    border-radius: 5px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    font-weight: 400;
    font-size: 20px;

    &:placeholder {
      color: ${({ theme }) => theme.colors.borderColor};
    }
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

  .inputError {
    border: 1px solid ${({ theme }) => theme.colors.colorError};
  }

  .inputSuccess {
    border: 1px solid ${({ theme }) => theme.colors.colorSuccess};
  }

  @media (max-width: 564px) {
    gap: 16px;

    .labelTextarea {
      height: 124px;
    }

    .fieldTextarea {
      padding: 10px 15px;
    }

    .errorMessage {
      font-size: 12px;
    }
  }
`;
