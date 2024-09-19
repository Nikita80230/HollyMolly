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
`;

export const WrapperProfileForms = styled.div`
  width: 926px;
`;
