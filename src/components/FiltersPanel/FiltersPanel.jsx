import { useEffect, useState } from "react";
import { debounce } from "lodash";
import PriceRangeSlider from "../PriceRangeSlider/PriceRangeSlider";
import { StyledFiltersPanel } from "./Styled";
import FilterBlock from "../FilterBlock/FilterBlock";
import { useSelector } from "react-redux";
import { selectProductsByCurrentCategory } from "src/redux/products/productsSlice";

const FiltersPanel = ({ className }) => {
  const [priceRange, setPriceRange] = useState([]);
  const [colors, setColors] = useState([]);
  const [fabricType, setFabricType] = useState([]);
  const [sizes, setSizes] = useState([]);

  const itemsByCategory = useSelector(selectProductsByCurrentCategory);

  useEffect(() => {
    itemsByCategory?.forEach((item) => {
      item.productsInstances?.forEach((instance) => {
        setColors((prevState) =>
          !prevState.includes(instance.color)
            ? [...prevState, instance.color]
            : [...prevState]
        );
        setFabricType((prevState) =>
          !prevState.includes(instance.material) && instance.material !== null
            ? [...prevState, instance.material]
            : [...prevState]
        );
        setSizes((prevState) =>
          !prevState.includes(instance.size) && instance.size !== null
            ? [...prevState, instance.size]
            : [...prevState]
        );
      });
    });
  }, [itemsByCategory]);

  const handleChangePrice = debounce((price) => {
    setPriceRange(price);
  }, 500);

  // console.log("priceRange-->", priceRange);
  // console.log("colors-->", colors);
  // console.log("fabricType-->", fabricType);
  // console.log("sizes-->", sizes);

  return (
    <StyledFiltersPanel className={className}>
      <div className="priceFilter">
        <h3 className="priceFilterTitle title">Ціна</h3>
        <PriceRangeSlider handleChangePrice={handleChangePrice} />
      </div>
      <FilterBlock title="Колір" options={colors} />
      <FilterBlock title="Матеріал" options={fabricType} />
      <FilterBlock title="Розмір" options={sizes} />
    </StyledFiltersPanel>
  );
};

export default FiltersPanel;
