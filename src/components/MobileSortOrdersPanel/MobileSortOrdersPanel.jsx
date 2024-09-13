import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";

import { MobileStyledSortOrdersPanel } from "./Styled";

const MobileSortOrdersPanel = ({
  handleSelectCriteria,
  selectedSortCriteria,
}) => {
  return (
    <MobileStyledSortOrdersPanel>
      <Swiper
        className="swiperCustomSorted"
        spaceBetween={8}
        // slidesPerView={3.5}
        slidesPerView="auto"
      >
        <SwiperSlide className="swiper-slideCustomSorted">
          {" "}
          <button
            className={clsx("sortButton", {
              active: selectedSortCriteria === "all",
            })}
            type="button"
            onClick={() => handleSelectCriteria("all")}
          >
            Всі
          </button>
        </SwiperSlide>

        <SwiperSlide className="swiper-slideCustom">
          {" "}
          <button
            className={clsx("sortButton", {
              active: selectedSortCriteria === "currentMonth",
            })}
            type="button"
            onClick={() => handleSelectCriteria("currentMonth")}
          >
            Цього місяця
          </button>
        </SwiperSlide>
        <SwiperSlide className="swiper-slideCustom">
          <button
            className={clsx("sortButton", {
              active: selectedSortCriteria === "previousMonth",
            })}
            type="button"
            onClick={() => handleSelectCriteria("previousMonth")}
          >
            Минулого місяця
          </button>
        </SwiperSlide>
        <SwiperSlide className="swiper-slideCustom">
          {" "}
          <button
            className={clsx("sortButton", {
              active: selectedSortCriteria === "year",
            })}
            type="button"
            onClick={() => handleSelectCriteria("year")}
          >
            Цього року
          </button>
        </SwiperSlide>
      </Swiper>
    </MobileStyledSortOrdersPanel>
  );
};

export default MobileSortOrdersPanel;
