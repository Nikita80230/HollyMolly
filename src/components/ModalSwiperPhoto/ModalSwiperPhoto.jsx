import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation } from 'swiper/modules';
import { WrapperModal } from "./Styled";

const ModalSwiperPhoto = ({ images, activeIndex }) => {
  return (
    <WrapperModal>
      <Swiper
        slidesPerView={1}
        effect={'fade'}
        navigation={true}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
        initialSlide={activeIndex} 
        style={{
          '--swiper-navigation-color': '#e85a50',
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
    </WrapperModal>
  );
};

export default ModalSwiperPhoto;