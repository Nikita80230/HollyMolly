import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import { StyledCategoriesSection } from "./Styled";
import ArrowLeft from "src/assets/images/arrowLeft.svg?react";
import ArrowRight from "src/assets/images/arrowRight.svg?react";
import CardCategories from "../CardCategories/CardCategories";

const CategoriesSwiper = () => {
  return (
    <StyledCategoriesSection>
      <h2 className="titleCategories">Категорії</h2>
      <div className="swiper-wrapper">
        <Swiper
          modules={[Grid, Navigation]}
          grid={{
            rows: 2,
            fill: "column",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // 678: {
            //    slidesPerView: 2,
            //   spaceBetween: 20,
            // },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
              grid: 1,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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
      </div>
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
