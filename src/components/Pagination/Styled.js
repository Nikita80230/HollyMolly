import { styled } from "styled-components";

export const WrapperPagination = styled.div`
.pagination{
    display:flex;
    gap:12px;
}

.paginationButton{
    border: 2px solid ${({ theme }) => theme.colors.borderPagination};
border-radius: 10px;
padding: 10px 20px;
display:flex;
justify-content:center;
align-items:center;
width: 44px;
height: 44px;
background-color: ${({ theme }) => theme.colors.primaryBgColor};
font-family: ${({ theme }) => theme.fonts.familyNunito};
font-weight: 500;
font-size: 20px;
color:${({ theme }) => theme.colors.borderButtonColor};
}

.paginationButtonActive{
    border: 2px solid ${({ theme }) => theme.colors.borderPagination};
border-radius: 10px;
padding: 10px 20px;
display:flex;
justify-content:center;
align-items:center;
width: 44px;
height: 44px;
background-color: ${({ theme }) => theme.colors.activePaginationBg};
font-family: ${({ theme }) => theme.fonts.familyNunito};
font-weight: 500;
font-size: 20px;
color:${({ theme }) => theme.colors.borderButtonColor};
}
`