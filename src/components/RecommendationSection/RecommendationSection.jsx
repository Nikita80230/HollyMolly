import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import CardProductCatalog from "../CardProductCatalog/CardProductCatalog";

import ArrowLeft from "src/assets/images/arrowLeft.svg?react";
import ArrowRight from "src/assets/images/arrowRight.svg?react";

import { StyledRecommendationSection } from "./Styled";

const RecommendationSection = ({
  recommendedProducts,
  colors,
  className,
  title,
  isHomePage,
}) => {
  // const recommendedProducts = useSelector(selectRecommendedProducts);

  return (
    <StyledRecommendationSection className={className}>
      <div className="wrapperTop">
        <h2 className="titleRecommendation">{title}</h2>
        <div className="buttonSwiper">
          <button className="prevProductBtn" type="button">
            <ArrowLeft />
          </button>
          <button className="nextProductBtn" type="button">
            <ArrowRight />
          </button>
        </div>
      </div>

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
          565: {
            slidesPerView: 3,
            spaceBetween: 20,
            grid: {
              rows: 1,
            },
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
            grid: {
              rows: 1,
            },
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 46,
            grid: {
              rows: 1,
            },
          },
        }}
      >
        {recommendedProducts.map((product, index) => {
          const borderColor = isHomePage
            ? colors[index % colors.length]
            : colors;
          return (
            <SwiperSlide key={product.id} className="swiper-slideCustom">
              <CardProductCatalog
                product={product}
                index={index}
                borderColor={borderColor}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledRecommendationSection>
  );
};

export default RecommendationSection;
