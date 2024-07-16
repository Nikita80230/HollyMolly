import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAmountOrder, selectBasket } from "src/redux/basket/selectors";
import { routes } from "src/routes";
import { ContainerModal } from "./Styled";


import { useEffect } from "react";
import { calculateAmountOrder } from "src/redux/basket/basketSlice";
import ListBasketLittle from "../ListBasketLittle/ListBasketLittle";

const ModalBasket = ({ closeModal }) => {
  const productBasket = useSelector(selectBasket);
  const amountOrder = useSelector(selectAmountOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateAmountOrder());
  }, [productBasket, dispatch]);

  return (
        <ContainerModal>
          <div className="containerCardBasket">
        <ListBasketLittle productBasket={productBasket} />
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
