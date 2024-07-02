import { styled } from "styled-components";

export const ContainerFeedbacks = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 60px;

  .starsWrapper {
    display: flex;
    gap: 5px;
  }

  .iconStar {
    width: 25px;
    height: 24px;
  }

  .spanFeedback {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
`;
