import { styled } from "styled-components";

export const StyledPageLayout = styled.div`
  .main {
    margin-top:81px;
    padding-top:364px;
  }
  @media (min-width: 564px) {
    .main {
    }
  }

  @media only screen and (min-width: 768px) {
    .main {
      margin-top: 82px;
      padding-top:16px;
    }
  }

  @media (max-width: 1024px) {
  }

  @media (min-width: 1440px) {
    margin-top: 110px;
    padding-top: 49px; 
  }
`;
