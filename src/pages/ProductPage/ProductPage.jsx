import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "src/components/Container/Container";
import ProductOnPage from "src/components/ProductOnPage/ProductOnPage";
import { getProductById } from "src/redux/products/operations";

const ProductPage = () => {
  const { productId, productInstanceId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch]);

  return (
    <Container>
      <ProductOnPage instanceId={productInstanceId} />
    </Container>
  );
};
export default ProductPage;
