import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
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
        className="swiperCustom"
        modules={[Navigation, A11y, Grid]}
        navigation={{
          nextEl: ".nextProductBtn",
          prevEl: ".prevProductBtn",
        }}
        spaceBetween={10}
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        breakpoints={{
          564: {
            slidesPerView: 3,
            spaceBetween: 20,
            grid: {
              rows: 1,
            },
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            grid: {
              rows: 1,
            },
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            grid: {
              rows: 1,
            },
          },
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index} className="swiper-slideCustom">
            <ProductCard />
          </SwiperSlide>
        ))}
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
