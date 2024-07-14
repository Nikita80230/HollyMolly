import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation } from 'swiper/modules';
import { WrapperModal } from "./Styled";
import ArrowLeft from "src/assets/images/arrowLeft.svg?react";
import ArrowRight from "src/assets/images/arrowRight.svg?react";

const ModalSwiperPhoto = ({ images, activeIndex }) => {
  return (
    <WrapperModal>
      <Swiper
        slidesPerView={1}
        effect={'fade'}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
        initialSlide={activeIndex} 
        navigation={{
              nextEl: ".nextProductBtn",
              prevEl: ".prevProductBtn",
            }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id} className="swiperSlide">
            <div>
              <img
                className="modalImg"
                src={image.link}
                alt={`Product photo ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
         <div className="buttonSwiper">
            <button className="prevProductBtn" type="button">
              <ArrowLeft className="iconSwiper"/>
            </button>
            <button className="nextProductBtn" type="button">
              <ArrowRight className="iconSwiper"/>
            </button>
          </div>
    </WrapperModal>
  );
};

export default ModalSwiperPhoto;