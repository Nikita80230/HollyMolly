import { useState } from "react";
import { StyledFiltersPanel } from "./Styled";
import PriceRangeSlider from "../PriceRangeSlider/PriceRangeSlider";
import { debounce } from "lodash";

const FiltersPanel = ({ className }) => {
  const [priceValue, setPriceValue] = useState([]);

  const handleChangePrice = debounce((price) => {
    setPriceValue(price);
  }, 500);

  console.log("FiltersPanel priceValue-->", priceValue);
  return (
    <StyledFiltersPanel className={className}>
      <div className="priceFilter">
        <h3 className="priceFilterTitle title">Ціна</h3>
        <form>
          <PriceRangeSlider handleChangePrice={handleChangePrice} />
        </form>
      </div>
      <div className="colorFilter">
        <h3 className="colorFilterTitle title">Колір</h3>
        <form>
          <label>
            <input type="checkbox" name="" id="" />
            <span>color</span>
          </label>
        </form>
      </div>
      <div className="fabricFilter">
        <h3 className="fabricFilterTitle title">Матеріал</h3>
      </div>
      <div className="sizeFilter">
        <h3 className="sizeFilterTitle title">Розмір</h3>
      </div>
    </StyledFiltersPanel>
  );
};

export default FiltersPanel;
