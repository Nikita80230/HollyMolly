import { useState } from "react";
import { WrapperCounter } from "./Styled";
import PlusIcon from "src/assets/images/plus.svg?react";
import MinusIcon from "src/assets/images/minus.svg?react";


const Counter = ({ quantity, setQuantity }) => {
  const handleClickPlus = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleClickMinus = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  return (
    <WrapperCounter>
      <button
        type="button"
        onClick={handleClickMinus}
        disabled={quantity <= 1}
        className="buttonCounter"
      >
        <MinusIcon />
      </button>

      <span className="spanCounter">{quantity}</span>

      <button
        type="button"
        onClick={handleClickPlus}
        className="buttonCounter"
      >
        <PlusIcon />
      </button>
    </WrapperCounter>
  );
};

export default Counter;
