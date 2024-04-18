import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import { StyledCategoriesSection } from "./Styled";
import ArrowLeft from "src/assets/images/arrowLeft.svg?react";
import ArrowRight from "src/assets/images/arrowRight.svg?react";
import CardCategories from "../CardCategories/CardCategories";
import { useSelector } from "react-redux";
import { selectCategories } from "src/redux/categories/selectors";

const CategoriesSwiper = () => {
  const data = useSelector(selectCategories);

  const categories = data.flatMap((item) => item.categories);

  return (
    <StyledCategoriesSection>
      <h2 className="titleCategories">Категорії</h2>
      <Swiper
        modules={[Navigation, Grid]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
            grid: {
              rows: 2,
            },
          },
          678: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
            grid: {
              rows: 1,
            },
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <CardCategories category={category} />
          </SwiperSlide>
        ))}
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
