import { styled } from "styled-components";

export const WrapperFavoritesPage = styled.div`
margin-bottom:100px;

  .gridFavorites {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 21px;
    width: 100%;
    overflow: hidden;
  }
`;
