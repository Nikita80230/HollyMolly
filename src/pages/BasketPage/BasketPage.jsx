import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketCard from "src/components/BasketCard/BasketCard";
import Container from "src/components/Container/Container";
import Title from "src/components/Title/Title";
import { useAuth } from "src/hooks";
import {
  calculateAmountOrder,
  updateProduct,
} from "src/redux/basket/basketSlice";

import { selectAmountOrder, selectBasket } from "src/redux/basket/selectors";

import { routes } from "src/routes";

import { WrapperBasketPage } from "./Styled";

const BasketPage = () => {
  const productsBasket = useSelector(selectBasket);
  console.log(productsBasket);
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectAmountOrder);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(calculateAmountOrder());
  }, [productsBasket, dispatch]);

  const handleClickAddCount = (productId) => {
    const product = productsBasket.find(
      (p) => p.productInstanceId === productId
    );
    if (product) {
      dispatch(
        updateProduct({
          productInstanceId: productId,
          quantity: product.quantity + 1,
        })
      );
    }
  };

  const handleClickCount = (productId) => {
    const product = productsBasket.find(
      (p) => p.productInstanceId === productId
    );
    if (product && product.quantity > 1) {
      dispatch(
        updateProduct({
          productInstanceId: productId,
          quantity: product.quantity - 1,
        })
      );
    }
  };

  return (
    <Container>
      <WrapperBasketPage>
        <Title title={"Твій кошик"} />
        <div className="wrapperBasket">
          <div className="wrapperList">
            <ul>
              {productsBasket.map((product) => (
                <BasketCard
                  product={product}
                  key={product.productInstanceId}
                  handleClickCount={() =>
                    handleClickCount(product.productInstanceId)
                  }
                  handleClickAddCount={() =>
                    handleClickAddCount(product.productInstanceId)
                  }
                />
              ))}
            </ul>
          </div>
          <div className="containerPrices">
            <div className="wrapperPrice">
              <span className="span">Ціна товарів </span>
              <span className="price">{totalPrice}₴</span>
            </div>
            <div className="wrapper">
              <span className="span">Доставка </span>
              <span className="price">від 100₴</span>
            </div>
            <div className="containerTotalPrice">
              <span className="spanTotalPrice">Загальна ціна </span>
              <span className="numberTotalPrice">{totalPrice + 100}₴</span>
            </div>
            {isLoggedIn ? (
              <Link to={routes.SUBMIT_ORDER}>
                <button className="buttonOrder">Перейти до оформлення</button>
              </Link>
            ) : (
              <p className="order">
                Щоб оформити замовлення потрібно<br></br>
                <Link to={routes.REGISTER} className="link">авторизуватись</Link>
              </p>
            )}
          </div>
        </div>
      </WrapperBasketPage>
    </Container>
  );
};

export default BasketPage;
