import { styled } from "styled-components";

export const WrapperFavoritesPage = styled.div`
padding-top:36px;
margin-bottom:100px;
height:100vh;

  .gridFavorites {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 21px;
    width: 100%;
    overflow: hidden;
  }
`;
