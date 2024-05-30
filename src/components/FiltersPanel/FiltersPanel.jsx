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

const FiltersPanel = ({ className }) => {
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
          !prevState.values.includes(instance.color)
            ? {
                filterName: "colors",
                values: [...prevState.values, instance.color],
              }
            : prevState
        );
        setFabricType((prevState) =>
          !prevState.values.includes(instance.material) &&
          instance.material !== null
            ? {
                filterName: "materials",
                values: [...prevState.values, instance.material],
              }
            : prevState
        );
        setSizes((prevState) =>
          !prevState.values.includes(instance.size) && instance.size !== null
            ? {
                filterName: "sizes",
                values: [...prevState.values, instance.size],
              }
            : prevState
        );
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
  }, 500);

  return (
    <StyledFiltersPanel className={className}>
      <div className="priceFilter">
        <h3 className="priceFilterTitle title">Ціна</h3>
        <PriceRangeSlider handleChangePrice={handleChangePrice} />
      </div>
      <FilterBlock title="Колір" options={colors} />

      <FilterBlock title="Колір" options={colors} />
      <FilterBlock title="Матеріал" options={material} />
      <FilterBlock title="Розмір" options={sizes} />
    </StyledFiltersPanel>
  );
};

export default FiltersPanel;
