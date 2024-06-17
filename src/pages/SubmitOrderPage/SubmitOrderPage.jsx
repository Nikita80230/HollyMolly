import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrderCard from "src/components/OrderCard/OrderCard";
import OrderForm from "src/components/OrderForm/OrderForm";
import { routes } from "src/routes";

const SubmitOrderPage = () => {
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  return (
    <>
      {orderSubmitted ? (
        <h2>Ваше замовлення успішно створено!</h2>
      ) : (
        <>
          <h1>Ваше замовлення:</h1>
          <Link to={routes.BASKET}>Редагувати</Link>
          <OrderCard />
          <h2>Ваші контактні дані</h2>
          <OrderForm onSuccess={() => setOrderSubmitted(true)} />
        </>
      )}
    </>
  );
};

export default SubmitOrderPage;
