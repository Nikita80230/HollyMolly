import { styled } from "styled-components";

export const WrapperCounter = styled.div`
  display: flex;
  gap: 20px;
  width: 119px;
  height: 40px;
  align-items: center;

  .buttonCounter {
    padding:8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 5px;
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
  }

  .icon {
    width: 15px;
    height: 15px;
    path {
      fill: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }

  .spanCounter {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    text-align: center;
  }

  @media (max-width: 564px) {
    gap: 14px;
    width: 87px;
    height: 30px;

    .buttonCounter {
      padding:6px;
      width: 30px;
      height: 30px;
    }

    .icon {
      width: 12px;
      height: 12px;
    }

    .spanCounter {
      font-size: 14px;
      line-height: 1.28571;
    }
  }
`;
