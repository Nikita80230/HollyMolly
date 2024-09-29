import { useEffect, useState } from "react";
import { debounce } from "lodash";
import PriceRangeSlider from "../PriceRangeSlider/PriceRangeSlider";
import { StyledFiltersPanel } from "./Styled";
import FilterBlock from "../FilterBlock/FilterBlock";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsByCurrentCategory } from "src/redux/products/productsSlice";
import {
  toggleFilter,
  resetFilters,
  // selectFilters,
} from "src/redux/filters/filtersSlice";
import { useLocation } from "react-router-dom";

const INITIAL_FILTER_STATE = { filterName: "", values: [] };

const FiltersPanel = ({ className, onPaginationReset }) => {
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

        // prevState?.values.forEach((value) => {
        //   console.log("sizes to lowerCase", value.toLowerCase());

        //   if (
        //     value.toLowerCase() !== instance.size.toLowerCase() &&
        //     instance.size !== null
        //   ) {
        //     return {
        //       filterName: "sizes",
        //       values: [...prevState.values, instance.size],
        //     };
        //   } else {
        //     return prevState;
        //   }
        // });
      });
    });
  }, [itemsByCategory, location]);

  useEffect(() => {
    setColors(INITIAL_FILTER_STATE);
    setFabricType(INITIAL_FILTER_STATE);
    setSizes(INITIAL_FILTER_STATE);
    dispatch(resetFilters());
  }, [location.pathname, dispatch]);

  const handleChangePrice = debounce((option) => {
    // setPriceRange(price);
    dispatch(toggleFilter(option));
    onPaginationReset();
  }, 500);

  return (
    <StyledFiltersPanel className={className}>
      <div className="priceFilter">
        <h3 className="priceFilterTitle title">Ціна</h3>
        <PriceRangeSlider handleChangePrice={handleChangePrice} />
      </div>

      <FilterBlock
        title="Колір"
        options={colors}
        onPaginationReset={onPaginationReset}
        deviceType="desktop"
      />
      <FilterBlock
        title="Матеріал"
        options={material}
        onPaginationReset={onPaginationReset}
        deviceType="desktop"
      />
      <FilterBlock
        title="Розмір"
        options={sizes}
        onPaginationReset={onPaginationReset}
        deviceType="desktop"
      />
    </StyledFiltersPanel>
  );
};

export default FiltersPanel;
