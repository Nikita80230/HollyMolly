import styled from "styled-components";

export const StyledOrderInstance = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;

  width: 100%;
  height: 108px;

  .instancePhotoWrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 100px;

    border: 1px solid ${({ theme }) => theme.colors.colorBgSpanRating};
    border-radius: 10px;

    .instanceImg {
      width: 70px;
      height: 70px;

      transition: transform ${({ theme }) => theme.animations.transition};
    }
    &:hover {
      .instanceImg {
        transform: scale(1.2);
      }
    }
  }
  .instanceImg {
    width: 100px;
    height: 100px;
  }
  .instanceData {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
  .instanceInfo {
    display: flex;
    flex-direction: column;
    /* align-items: center; */

    gap: 5px;

    .instanceInfoTitle {
      font-weight: 400;
      font-size: 16px;
      line-height: 1.25;

      font-family: ${({ theme }) => theme.fonts.familyGaramond};
      color: ${({ theme }) => theme.colors.accentColor};
    }
    .instanceInfoId {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.21429;

      font-family: ${({ theme }) => theme.fonts.familyDidact};
      color: ${({ theme }) => theme.colors.secondaryTxtColor};
    }

    .text {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.21429;

      font-family: ${({ theme }) => theme.fonts.familyDidact};
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
    .instanceInfoSize {
    }
    .instanceInfoColor {
    }
    .instanceInfoQuantity {
    }
  }

  .instancePrice {
    display: flex;
    flex-direction: column;

    .discountPrice {
      font-weight: 400;
      font-size: 20px;
      line-height: 1.2;

      font-family: ${({ theme }) => theme.fonts.familyPacifico};
      color: ${({ theme }) => theme.colors.accentColor};
    }

    .price {
      position: relative;

      font-weight: 400;
      font-size: 18px;
      line-height: 1.33333;

      font-family: ${({ theme }) => theme.fonts.familyPacifico};
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }

    .price::after {
      content: "";
      position: absolute;
      top: 58%;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.colors.primaryTxtColor};
      transform: translateY(-50%);
    }
  }

  /* ==== Mobile max-width:564px=== */
  @media (max-width: 564px) {
    .instanceData {
      align-items: flex-start;
    }
  }
`;
