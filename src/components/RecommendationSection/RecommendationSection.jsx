import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../ProductCard/ProductCard";

import ArrowLeft from "src/assets/images/arrowLeft.svg?react";
import ArrowRight from "src/assets/images/arrowRight.svg?react";

import { StyledRecommendationSection } from "./Styled";

const RecommendationSection = () => {
  return (
    <StyledRecommendationSection>
      <h2 className="titleRecommendation">Рекомендації</h2>
      <Swiper
        className="swiper"
        modules={[Navigation, A11y]}
        spaceBetween={24}
        slidesPerView={4}
        navigation={{
          nextEl: ".nextProductBtn",
          prevEl: ".prevProductBtn",
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
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
      <div className="buttonSwiper">
        <button className="prevProductBtn" type="button">
          <ArrowLeft />
        </button>
        <button className="nextProductBtn" type="button">
          <ArrowRight />
        </button>
      </div>
    </StyledRecommendationSection>
  );
};

export default RecommendationSection;
