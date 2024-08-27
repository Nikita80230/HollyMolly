import styled from "styled-components";

export const StyledCategoryBtn = styled.div`
  position: relative;
  margin-right: 40px;

  .openCategoryBtn {
    padding:10px 0 10px 20px;

    display: flex;
    align-items: center;
    justify-content:center;
    background-color: transparent;
    border: none;

     @media (max-width: 375px) {
      
     }
  }

  .text {
     font-family: ${({ theme }) => theme.fonts.familyGaramond};
    font-weight: 400;
    font-size: 36px;
    line-height: 1.22222;
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    margin-right: 20px;
  }

  .openCategoryIcon {
    width:32px;
    height:32px;
    transition: ${({ theme }) => theme.animations.transition};
  }

  .openCategoryIcon.openedCategoryIcon {
    transform: rotate(-180deg);
  }

  /* @media (min-width: 768px) and (max-width: 1024px) {
    margin-right: 8px;
  } */
`;
