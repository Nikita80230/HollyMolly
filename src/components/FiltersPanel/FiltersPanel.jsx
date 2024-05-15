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
    // first

    itemsByCategory?.forEach((item) => {
      console.log("item-->", item);
      item.productsInstances?.forEach((instance) => {
        console.log("instance-->", instance);
        setColors((prevState) => [...prevState, instance.color]);
      });
    });
  }, [itemsByCategory]);

  const handleChangePrice = debounce((price) => {
    setPriceRange(price);
    console.log(price);
  }, 500);

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
