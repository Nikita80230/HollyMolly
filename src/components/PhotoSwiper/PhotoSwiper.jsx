import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { WrapperPhoto } from "./Styled";
import { useEffect, useRef, useState } from "react";

const PhotoSwiper = ({ images, border, idInstance, instance }) => {
  const swiperRef = useRef(null);

  const [currentImages, setCurrentImages] = useState(images);

  useEffect(() => {
    if (instance && idInstance) {
      setCurrentImages(instance.images);
    }
  }, [instance, idInstance]);

  useEffect(() => {
    if (swiperRef.current && currentImages.length > 0) {
      swiperRef.current.slideTo(0);
    }
  }, [currentImages]);

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
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
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
