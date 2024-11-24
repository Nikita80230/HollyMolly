import { styled } from "styled-components";

export const ContainerFeedbacks = styled.div`
  .starsWrapper {
    display: flex;
    gap: 5px;
  }

  .iconStar {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 1239px) {

  .iconStar {
    width: 16px;
    height: 16px;
  }

  }

  @media (max-width: 564px) {
    .iconStar {
      width: 16px;
      height: 16px;
    }
  }
`;
