import { styled } from "styled-components";

export const StyledCardCategories = styled.div`
  text-align: center;
  height: 294px;

  .wrapperPicture {
    margin-bottom: 16px;
    width: 290px;
    height: 253px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.backgroundCard};
  }

  .textCard {
    font-family: ${({ theme }) => theme.fonts.fontNunito};
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textCard};
  }
`;
