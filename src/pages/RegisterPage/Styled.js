import { styled } from "styled-components";

export const WrapperRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  .titleAuth {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 48px;
    line-height: 1.16667;
    text-align: center;
    background: ${({ theme }) => theme.colors.gradientTitle};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 76px;
  }

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
`;
