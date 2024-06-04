import { styled } from "styled-components";

export const WrapperLogin = styled.section`
position: fixed;
  bottom: 0;
  top: 18%;
  left: 35%;
  padding: 68px 40px;
  border-radius: 32px;
  width: 544px;
  height: 676px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowAuth};
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px); /* Для підтримки в Safari */
  background: ${({ theme }) => theme.colors.backgroundAuth};

  animation: ${({ theme }) => theme.animations.slideInFromBottom} 0.5s ease-out;

  .titleLogin{
     font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 32px;
    color: ${({ theme }) => theme.colors.colorAuth};
  }
  .descriptionLogin{
    margin-bottom: 30px;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.colorAuth};
  }

   .textLogin {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.authColorSecondaryText};
  }

  .linkLogin {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 800;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.authColorSecondaryText};
  }
`