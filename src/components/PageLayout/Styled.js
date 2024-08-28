import { styled } from "styled-components";

export const StyledPageLayout = styled.div`
  .main {
    margin-top: 115px;
    /* padding-top: 49px; */
  }

  @media (max-width: 375px) {
    .main {
      margin-top: 70px;
    }
  }

  /* @media only screen and (max-width: 768px) {
    .main {
      margin-top: 82px;
      padding-top: 16px;
    }
  } */
`;
