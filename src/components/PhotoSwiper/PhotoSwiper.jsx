import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { WrapperPhoto } from "./Styled";

const PhotoSwiper = ({ images, border }) => {
  return (
    <WrapperPhoto>
      <Swiper
        className="swiperCustom"
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
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
    </WrapperPhoto>
  );
};

export default PhotoSwiper;
