import { Wrapper } from "./Styled";
import Close from "../../assets/images/closeCrossIcon.svg?react"

const ModalSubscribe = ({onClose}) => {
  return (
      < Wrapper>
          <button className="buttonModal" type="button"onClick={onClose}><Close className="iconClose"/></button>
      <h3 className="title">Дякуємо за підписку!</h3>
      <p className="description">
        Ви успішно підписалися на нашу щотижневу розсилку.
      </p>
      <p className="text">
        Тепер Ви завжди будете в курсі всіх останніх новинок нашого магазину.
      </p>
    </ Wrapper>
  );
};

export default ModalSubscribe;
