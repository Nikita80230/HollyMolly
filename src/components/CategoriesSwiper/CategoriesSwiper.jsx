import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { StyledCategoriesSection } from "./Styled";
// import { CardCategories } from "../CardCategories/CardCategories";
import ArrowLeft from "src/assets/images/arrowLeft.svg?react";
import ArrowRight from "src/assets/images/arrowRight.svg?react";
import CardCategories from "../CardCategories/CardCategories";

const CategoriesSwiper = () => {
  return (
    <StyledCategoriesSection>
      <h2 className="titleCategories">Категорії</h2>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={24}
        slidesPerView={4}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <CardCategories />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategories />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategories />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategories />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategories />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategories />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategories />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategories />
        </SwiperSlide>
      </Swiper>
      <div className="button-swiper">
        <button className="swiper-button-next" type="button">
          <ArrowRight />
        </button>
        <button className="swiper-button-prev" type="button">
          <ArrowLeft />
        </button>
      </div>
    </StyledCategoriesSection>
  );
};

export default CategoriesSwiper;
