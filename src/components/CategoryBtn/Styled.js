import styled from "styled-components";

export const StyledCategoryBtn = styled.div`
  position: relative;

  margin-right: 40px;

  .openCategoryBtn {
    display: flex;
    align-items: center;

    padding: 10px 10px 10px 0;

    background-color: transparent;
    border: none;
  }

  .text {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    margin-right: 15px;
  }

  .openCategoryIcon {
    transition: ${({ theme }) => theme.animations.transition};
  }

  .openCategoryIcon.openedCategoryIcon {
    transform: rotate(90deg);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-right: 8px;
  }
`;
