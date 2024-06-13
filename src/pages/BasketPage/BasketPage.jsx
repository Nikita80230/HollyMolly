import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketCard from "src/components/BasketCard/BasketCard";
import { selectBasketProducts } from "src/redux/products/productsSlice";
import { routes } from "src/routes";

import { WrapperBasketPage } from "./Styled";

const BasketPage = () => {
  const products = useSelector(selectBasketProducts);
  
  const [counts, setCounts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const initialCounts = products.reduce((acc, product) => {
      acc[product.productInstanceId] = 1;
      return acc;
    }, {});
    setCounts(initialCounts);
  }, [products]);

  useEffect(() => {
    const newTotalPrice = products.reduce((sum, product) => {
      const count = counts[product.productInstanceId] || 1;
      return sum + count * product.priceAfterDiscount;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [products, counts]);

  const handleClickAddCount = (productId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 1) + 1,
    }));
  };

  const handleClickCount = (productId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: Math.max((prevCounts[productId] || 1) - 1, 1),
    }));
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
                  count={counts[product.productInstanceId]}
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
                <div className="containerSpan">
                  <span>Доставка </span>
                  <span>від 100₴</span>
                </div>
                <div className="containerSpan">
                  <span>Загальна ціна </span>
                  <span>{totalPrice + 100}₴</span>
                </div>
              </div>
              <div className="wrapperPromoCode">
                <span>Промокод</span>
                <input />
                <button>Додати</button>
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
