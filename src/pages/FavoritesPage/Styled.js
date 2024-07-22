import { styled } from "styled-components";

export const WrapperFavoritesPage = styled.div`
padding-top:36px;
margin-bottom:100px;


.titleFavorites{
  margin-top:50px;
    font-weight: 400;
    font-size: 36px;
    line-height: 1.22222;
    
}

  .gridFavorites {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 21px;
    width: 100%;
    overflow: hidden;
  }
`;
