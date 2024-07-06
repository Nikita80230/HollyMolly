import { styled } from "styled-components";

export const PhotoContainer = styled.div`

  height:582px;
  display: flex;
  flex-direction: column;
  gap: 10px;


.mainPhoto {
  width: 600px;
  height: 374px;
  margin-bottom: 8px;
}

.otherPhotos {
  display: flex;
  gap: 10px;
}

.mainImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 5px solid ${({ theme }) => theme.colors.borderProductPhoto};
  border-radius: 10px;
}

.otherImage {
  width: 295px;
  height: 200px;
  object-fit: cover;
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
`