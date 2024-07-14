import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAmountOrder, selectBasket } from "src/redux/basket/selectors";
import { routes } from "src/routes";
import { ContainerModal } from "./Styled";
import IconMinus from "src/assets/images/minus.svg?react";
import IconPlus from "src/assets/images/plus.svg?react";

import { useEffect } from "react";
import { calculateAmountOrder } from "src/redux/basket/basketSlice";

const ModalBasket = ({ closeModal }) => {
  const productBasket = useSelector(selectBasket);
  console.log(productBasket);
  const amountOrder = useSelector(selectAmountOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateAmountOrder());
  }, [productBasket, dispatch]);

  return (
        <ContainerModal>
          <div className="containerCardBasket">
            <ul className="listModalBasket">
              {productBasket.map(
                ({
                  productName,
                  productImage,
                  productInstanceId,
                  size,
                  totalPrice,
                  quantity,
                }) => (
                  <li className="modalItem" key={productInstanceId}>
                    <img
                      src={productImage}
                      alt="product image"
                      className="image"
                    />
                    <div className="wrapperContent">
                      <span className="productName">{productName}</span>
                      <span className="spanId">ID {productInstanceId}</span>
                      <span className="spanSize">Розмір: {size}</span>
                      <div className="containerCounterPrice">
                        <div className="wrapperCounter">
                          <button type="button" className="buttonCount">
                            <IconMinus className="icon" />
                          </button>
                          <span className="countQuantity">{quantity}</span>
                          <button type="button" className="buttonCount">
                            <IconPlus className="icon" />
                          </button>
                        </div>
                        <span className="spanTotalPrice">{totalPrice}₴</span>
                      </div>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="containerPriceLink">
            <div className="wrapperPrice">
              <span className="spanSum">Загальна сума</span>
              <span className="spanNum">{amountOrder}₴</span>
            </div>
            <NavLink className="userPanelLink" to={routes.BASKET}>
              <button
                type="button"
                className="buttonModal"
                onClick={closeModal}
              >
                Дивитися кошик
              </button>
            </NavLink>
          </div>
        </ContainerModal>
     
    
  );
};

export default ModalBasket;
