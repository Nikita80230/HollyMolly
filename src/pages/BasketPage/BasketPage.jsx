import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketCard from "src/components/BasketCard/BasketCard";
import {
  calculateAmountOrder,
  selectAmountOrder,
  selectBasketProducts,
  updateProduct,
} from "src/redux/products/productsSlice";
import { routes } from "src/routes";

import { WrapperBasketPage } from "./Styled";

const BasketPage = () => {
  const products = useSelector(selectBasketProducts);
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectAmountOrder);

  useEffect(() => {
    dispatch(calculateAmountOrder());
  }, [products, dispatch]);

  const handleClickAddCount = (productId) => {
    const product = products.find((p) => p.productInstanceId === productId);
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
    const product = products.find((p) => p.productInstanceId === productId);
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
    <WrapperBasketPage>
      <div>
        <h1 className="titleBasket">Кошик</h1>
        <div className="wrapperBasket">
          <div className="wrapperList">
            <ul>
              {products.map((product) => (
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
          <div>
            <div className="containerPrices">
              <div className="wrapperPrices">
                <div className="containerSpan">
                  <span>Ціна товарів </span>
                  <span>{totalPrice}₴</span>
                </div>
                {/* <div className="containerSpan">
                  <span>Доставка </span>
                  <span>від 100₴</span>
                </div>
                <div className="containerSpan">
                  <span>Загальна ціна </span>
                  <span>{totalPrice + 100}₴</span>
                </div> */}
              </div>

              <Link to={routes.SUBMIT_ORDER}>Перейти до оформлення</Link>
            </div>
            <div>
              <span>Способи оплати:</span>
              <Link>
                <div>
                  <span>Умови та деталі повернення</span>
                </div>
              </Link>
              <Link>
                <div>
                  <span>Детальна інформація про доставку</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </WrapperBasketPage>
  );
};

export default BasketPage;
