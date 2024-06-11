import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketCard from "src/components/BasketCard/BasketCard";
import { selectBasketProducts } from "src/redux/products/productsSlice";

import { WrapperBasketPage } from "./Styled";

const BasketPage = () => {
  const products = useSelector(selectBasketProducts);
  console.log("basket", products)
  return (
    <WrapperBasketPage>
      <div>
        <h1 className="titleBasket">Кошик</h1>
        <div className="wrapperBasket">
          <div className="wrapperList">
            <ul>
              {products.map((product)=>
                <BasketCard product={product} key={product.productInstanceId} />)}
            </ul>
          </div>
          <div>
            <div className="containerPrices">
              <div className="wrapperPrices">
                <div className="containerSpan">
                  <span>Ціна товарів </span>
                  <span>₴</span>
                </div>
                <div className="containerSpan">
                  <span>Доставка </span>
                  <span>від 100₴</span>
                </div>
                <div className="containerSpan">
                  <span>Загальна ціна </span>
                  <span>₴</span>
                </div>
              </div>
              <div className="wrapperPromoCode">
                <span>Промокод</span>
                <input />
                <button>Додати</button>
              </div>
              <button>Перейти до оформлення</button>
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
