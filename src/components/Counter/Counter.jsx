import { useState } from "react";
import { WrapperCounter } from "./Styled";
import PlusIcon from "src/assets/images/plus.svg?react";
import MinusIcon from "src/assets/images/minus.svg?react";

const Counter = ({ quantity, setQuantity, stockQuantity }) => {
  
  const handleIncrement = () => {
    if (quantity < stockQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <WrapperCounter>
      <button
        type="button"
        className="buttonCounter"
        onClick={handleDecrement}
        disabled={quantity <= 1}
      >
        <MinusIcon className="icon" />
      </button>

      <span className="spanCounter">{quantity}</span>

      <button
        type="button"
        className="buttonCounter"
        onClick={handleIncrement}
        disabled={quantity >= stockQuantity}
      >
        <PlusIcon className="icon" />
      </button>
    </WrapperCounter>
  );
};

export default Counter;
