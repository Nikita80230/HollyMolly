import { useSelector } from "react-redux";
import { selectBasketProducts } from "src/redux/products/productsSlice";

const SubmitOrderPage = () => {
    const basketProducts = useSelector(selectBasketProducts)
    console.log(basketProducts)
    return (<>
    <h1>Сторінка оформлення замовлення</h1></>)
}

export default SubmitOrderPage;