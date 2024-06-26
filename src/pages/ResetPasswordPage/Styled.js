import { styled } from "styled-components";

export const WrapperResetPassword = styled.div`
position: fixed;
  bottom: 0;
  top: 30%;
  left: 35%;
  padding: 68px 40px;
  border-radius: 32px;
  width: 544px;
  height: 412px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowAuth};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px); /* Для підтримки в Safari */
  background: ${({ theme }) => theme.colors.backgroundAuth};

  animation: ${({ theme }) => theme.animations.slideInFromBottom} 0.5s ease-out;

  .titleReset {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 32px;
    color: ${({ theme }) => theme.colors.colorAuth};
  }
  .description {
    margin-bottom: 30px;
    text-align:center;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.colorAuth};
  }


`