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
  border: 5px solid ${({ theme }) => theme.colors.borderProductPhoto};
  border-radius: 10px;
}

.otherImage {
  width: 295px;
  height: 200px;
  object-position: center center;
  border: 5px solid ${({ theme }) => theme.colors.borderProductPhoto};
  border-radius: 10px;
}

  .mySwiper {
    width: 80%;
    height: 80%;
  }

  .swiperSlide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .modalImg {
    max-width: 100%;
    height: auto;
  }
`;

export const ContainerModalPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 700px;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
`;
