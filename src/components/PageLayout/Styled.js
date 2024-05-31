import { styled } from "styled-components";

export const StyledPageLayout = styled.div`
  .main {
    margin-top: 81px;
    padding-top: 364px;
  }
  

  @media only screen and (min-width: 768px) {
    .main {
      margin-top: 82px;
      padding-top: 16px;
    }
  }

  @media only screen and (min-width: 1440px) {
    .main {
      margin-top: 110px;
      padding-top: 49px;
    }
  }
`;
