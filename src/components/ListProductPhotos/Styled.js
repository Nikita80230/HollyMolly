import { styled } from "styled-components";

export const PhotoContainer = styled.div`
  height: 582px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .mainPhoto {
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 600px;
    height: 374px;
    border: 5px solid ${({ theme }) => theme.colors.borderProductPhoto};
    border-radius: 10px;
  }

  .otherPhotos {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    gap: 10px;
    width: 600px;
    height: 200px;

    border-radius: 10px;
  }

  .mainImage {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
    border-radius: 10px;
  }

  .otherImage {
    width: 295px;
    height: 200px;
    object-position: center center;
    border: 5px solid ${({ theme }) => theme.colors.borderProductPhoto};
    border-radius: 10px;
  }
`;


