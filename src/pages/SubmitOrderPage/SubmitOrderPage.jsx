import Container from "src/components/Container/Container";
import Title from "src/components/Title/Title";
import OrderForm from "src/components/OrderForm/OrderForm";
import { WrapperPage } from "./Styled";
import ListBasketLittle from "src/components/ListBasketLittle/ListBasketLittle";
import { useDispatch, useSelector } from "react-redux";
import { selectAmountOrder, selectBasket } from "src/redux/basket/selectors";
import { useEffect } from "react";
import { calculateAmountOrder } from "src/redux/basket/basketSlice";
import { getProfile } from "src/redux/user/operations";
import { useLocation } from "react-router-dom";

const SubmitOrderPage = () => {
  const productBasket = useSelector(selectBasket);
  const totalPrice = useSelector(selectAmountOrder);
  const dispatch = useDispatch();
  const location = useLocation();

  //  useEffect(() => {
  //   const queryParams = new URLSearchParams(location.search);
  //   const status = queryParams.get('status');

  //   if (paymentSucceeded=true) {
  //     openModal();
  //   } else if (paymentSucceeded=false) {
  //     openModal();
  //   }
  // }, [location]);

  useEffect(() => {
    dispatch(calculateAmountOrder());
  }, [productBasket, dispatch]);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <Container>
      <WrapperPage>
        <Title title={"Особисті дані"} />
        <div className="wrapperFormList">
          <OrderForm />
          <div className="basketContainer">
            <div className="containerList">
              <ListBasketLittle productBasket={productBasket} />
            </div>
            <div className="containerSpan">
              <div className="wrapperSpan">
                <span className="spanText">Ціна товарів</span>
                <span className="spanPrice">{totalPrice}₴</span>
              </div>
              <div className="wrapperSpan">
                <span className="spanText">Доставка</span>
                <span className="spanPrice">100₴</span>
              </div>
              <div className="wrapperSpan">
                <span className="spanText">Загальна сума</span>
                <span className="totalPrice">{totalPrice + 100}₴</span>
              </div>
            </div>
          </div>
        </div>
      </WrapperPage>
    </Container>
  );
};

export default SubmitOrderPage;
