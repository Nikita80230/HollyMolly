import CloseCrossIcon from "src/assets/images/closeCrossIcon.svg?react";

import { StyledMobileFiltersPanel } from "./Styles";
import { createPortal } from "react-dom";
import PriceRangeSlider from "../PriceRangeSlider/PriceRangeSlider";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { selectProductsByCurrentCategory } from "src/redux/products/productsSlice";
import { resetFilters, toggleFilter } from "src/redux/filters/filtersSlice";
import FilterBlock from "../FilterBlock/FilterBlock";

const INITIAL_FILTER_STATE = { filterName: "", values: [] };

const MobileFiltersPanel = ({
  toggleFiltersPanel,
  onPaginationReset,
  isFiltersPanelOpened,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [colors, setColors] = useState(INITIAL_FILTER_STATE);
  const [material, setFabricType] = useState(INITIAL_FILTER_STATE);
  const [sizes, setSizes] = useState(INITIAL_FILTER_STATE);

  const itemsByCategory = useSelector(selectProductsByCurrentCategory);

  useEffect(() => {
    itemsByCategory?.forEach((item) => {
      item.productsInstances?.forEach((instance) => {
        setColors((prevState) =>
          !prevState.values.includes(instance.color?.toLowerCase())
            ? {
                filterName: "colors",
                values: [...prevState.values, instance.color?.toLowerCase()],
              }
            : prevState
        );
        setFabricType((prevState) =>
          !prevState.values.includes(instance.material?.toLowerCase()) &&
          instance.material !== null
            ? {
                filterName: "materials",
                values: [...prevState.values, instance.material?.toLowerCase()],
              }
            : prevState
        );
        setSizes((prevState) =>
          // console.log("instance.size", instance.size);
          !prevState.values.includes(instance?.size?.toLowerCase()) &&
          instance.size !== null
            ? {
                filterName: "sizes",
                values: [...prevState.values, instance?.size?.toLowerCase()],
              }
            : prevState
        );
      });
    });
  }, [itemsByCategory, location, isFiltersPanelOpened]);

  // useEffect(() => {
  //   setColors(INITIAL_FILTER_STATE);
  //   setFabricType(INITIAL_FILTER_STATE);
  //   setSizes(INITIAL_FILTER_STATE);
  //   dispatch(resetFilters());
  // }, [location.pathname, dispatch]);

  const handleChangePrice = debounce((option) => {
    // setPriceRange(price);
    dispatch(toggleFilter(option));
    onPaginationReset();
  }, 500);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      toggleFiltersPanel();
    }
  };

  return createPortal(
    <StyledMobileFiltersPanel onClick={handleOverlayClick}>
      <div className="mobileFiltersPanel">
        <button
          className="closeFiltersBtn"
          type="button"
          onClick={toggleFiltersPanel}
        >
          <CloseCrossIcon className="closeFiltersBtnIcon" />
        </button>
        <h3 className="filtersPanelTitle">Фільтри</h3>
        <div className="priceFilter">
          <h3 className="priceFilterTitle title">Ціна</h3>
          <PriceRangeSlider handleChangePrice={handleChangePrice} />
        </div>

        <FilterBlock
          title="Колір"
          options={colors}
          onPaginationReset={onPaginationReset}
          deviceType="mobile"
        />
        <FilterBlock
          title="Матеріал"
          options={material}
          onPaginationReset={onPaginationReset}
          deviceType="mobile"
        />
        <FilterBlock
          title="Розмір"
          options={sizes}
          onPaginationReset={onPaginationReset}
          deviceType="mobile"
        />
      </div>
    </StyledMobileFiltersPanel>,
    document.querySelector("#portal")
  );
};

export default MobileFiltersPanel;
