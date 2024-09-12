import { styled } from "styled-components";

export const StyledProfilePageLayout = styled.div`
  .main {
    margin-top: 110px;
    margin-bottom: 80px;
    padding-top: 49px;
    display: flex;

    /*========== Mobile - @media (max-width: 564px)================ */

    @media (max-width: 564px) {
      margin-top: 72px;
      margin-bottom: 24px;
      padding-top: 24px;
      display: block;
    }
  }
`;
export const ContainerProfile = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;
  display: flex;
  gap: 153px;

  /*========== Mobile - @media (max-width: 564px)================ */

  /* @media (max-width: 564px) {
  max-width: 564px;
  width: 100%;
  padding:0 20px;
  margin: 0 auto;
  display:block;
  
  } */
`;

export const WrapperProfileForms = styled.div`
  width: 926px;

  /*========== Mobile - @media (max-width: 564px)================ */

  /* @media (max-width: 564px) {
    display: none;
  } */
`;

export const TitleProfile = styled.h1`
  @media (max-width: 564px) {
    margin-bottom:24px;
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 32px;
    line-height: 1.1875;
    text-align: center;
    width: 188px;
    height: 48px;
    background-image: ${({ theme }) => theme.colors.gradientTitle};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
