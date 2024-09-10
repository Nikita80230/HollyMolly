import { styled } from "styled-components";

export const ContainerNotification = styled.div`
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  /* width: 330px; */
  height: 74px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowLeaveReview};
  background: ${({ theme }) => theme.colors.primaryBgColor};

  .icon {
    width: 24px;
    height: 24px;
    path {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }

  .notification {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    white-space: nowrap;
  }

  @media (max-width: 564px) {
    width: 100%;
    height: 198px;
    border-radius: 0;

    .notification {
      font-size: 24px;
      line-height: 1;
    }
  }
`;
