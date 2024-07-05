import { styled } from "styled-components";

export const WrapperPagination = styled.div`
  .pagination {
    display: flex;
    gap: 5px;
  }

  .paginationButton {
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    font-weight: 400;
    font-size: 16px;
    background-color: transparent;
    transition: box-shadow ${({ theme }) => theme.animations.transition};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    }
  }

  .paginationButtonActive {
    border-radius: 5px;
    border: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.accentColor};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.whiteTxtColor};

    transition: box-shadow ${({ theme }) => theme.animations.transition};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    }
  }
`;
