import { styled } from "styled-components";

export const WrapperRegister = styled.section`
  padding-top: 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  .list {
    display: flex;
    gap: 25px;
  }

  .buttonEnter {
    border-radius: 5px;
    border: transparent;
    padding: 10px 5px;
    width: 195px;
    height: 57px;
    background: ${({ theme }) => theme.colors.primaryBgColor};
    font-weight: 400;
    font-size: 30px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    transition: box-shadow ${({ theme }) => theme.animations.transition},
      color ${({ theme }) => theme.animations.transition};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    }

    &:focus {
      text-decoration: underline;
      text-decoration-skip-ink: none;
      color: ${({ theme }) => theme.colors.accentColor};
    }
  }

  .buttonActive {
    border-radius: 5px;
    border: transparent;
    padding: 10px 5px;
    width: 195px;
    height: 57px;
    background: ${({ theme }) => theme.colors.primaryBgColor};
    font-weight: 400;
    font-size: 30px;
    line-height: 1.2;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .wrapperFormPhoto {
    margin-bottom: 166px;
    display: flex;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    width: 860px;
    height: 500px;
  }

  .authPhoto {
    border-radius: 0 10px 10px 0;
    width: 430px;
    height: 500px;
  }

  /* ==== Mobile max-width:564px=== */
  @media (max-width: 564px) {
    position: relative;
    padding-top: 24px;
    gap: 24px;

    .list {
      gap: 0;
    }

    .buttonEnter {
      padding: 7px 5px;
      width: 165px;
      height: 44px;
      font-size: 24px;
      line-height: 1.20833;
    }

    .buttonActive {
      padding: 7px 5px;
      width: 165px;
      height: 44px;
      font-size: 24px;
      line-height: 1.20833;
    }

    .wrapperFormPhoto {
      position: absolute;
      top: 92px;
      left: -20px;
      width: 564px;
      height: 650px;
      border:transparent;
    }

    .authPhoto {
      width: 100%;
      height: 100%;
    }
  }
`;
