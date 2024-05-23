import styled from "styled-components";

export const StyledList = styled.ul`
 margin-bottom: 10px;

    display: flex;
    justify-content: center;
    gap: 8px;

    .buttonColor {
    margin-bottom: 10px;
    border:1px solid ${({ theme }) => theme.colors.borderPagination};
    width: 14px;
    height: 14px;
    transition: border ${({ theme }) => theme.animations.transition};

    &:hover,
    &:focus {
    border: 2px solid ${({ theme }) => theme.colors.borderButtonColor};
    }
  }
`
