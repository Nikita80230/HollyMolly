import { styled } from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  gap: 1px;

  .itemSizes {
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border: 1px solid transparent;
    background-color: transparent;
  }

  .itemSizes.active {
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: transparent;
  }

  .sizeSpan {
    font-weight: 400;
    font-size: 30px;
    white-space: nowrap;
  }

  @media (max-width: 564px) {
    .itemSizes {
      width: 40px;
      height: 29px;
    }

    .itemSizes.active {
      width: 40px;
      height: 29px;
    }

    .sizeSpan {
      font-size: 16px;
      line-height: 1.1875;
    }
  }
`;
