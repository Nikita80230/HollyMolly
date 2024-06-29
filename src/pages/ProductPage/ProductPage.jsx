import { useParams } from "react-router-dom";

const ProductPage = () => {

    const { productId } = useParams();
    console.log(productId);

    
    return (<>
        <h1>ProductPage </h1></>)
}
export default ProductPage;