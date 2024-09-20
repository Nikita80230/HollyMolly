import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { WrapperPhoto } from "./Styled";

const PhotoSwiper = ({ images, border, onSelectPhoto }) => {
  console.log(images)
  
    const handleSlideChange = (swiper) => {
      const activeIndex = swiper.activeIndex;
      console.log("activeIndex", activeIndex); // Отримуємо індекс активного слайда
    const selectedImage = images[activeIndex]; // Отримуємо відповідне зображення
      console.log("selectedImage", selectedImage);
    if (onSelectPhoto && selectedImage) {
       onSelectPhoto(selectedImage.id);
      console.log("if", selectedImage.id);
      // Передаємо колір обраного зображення
    }
  };

  return (
    <WrapperPhoto>
      <Swiper
        className="swiperCustom"
        modules={[Pagination]}
         pagination={{
          el: ".swiper-pagination-container-photo",
          clickable: true,
        }}
        slidesPerView={1}
         onSlideChange={handleSlideChange}
      >
        {images.map(({ link, id }) => (
          <SwiperSlide key={id} className="swiper-slideCustom">
            <img
              src={link}
              alt={`Slide ${id}`}
              style={{ border: `2px solid ${border}` }}
              className="styledPhoto"
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination-container-photo"></div>
    </WrapperPhoto>
  );
};

export default PhotoSwiper;
