import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "src/components/Container/Container";
import ProductOnPage from "src/components/ProductOnPage/ProductOnPage";
import ProductReviews from "src/components/ProductReviews/ProductReviews";
import { getProductById } from "src/redux/products/operations";
import { getFeedbacks } from "src/services/getFeedbacks";

const ProductPage = () => {
  const { productId, productInstanceId } = useParams();
   const [reviews, setReviews] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])

  useEffect(() => {
    dispatch(getProductById(productId));
    
  }, [dispatch]);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFeedbacks(productId);

        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [productId]);

  return (
    <Container>
      <ProductOnPage instanceId={productInstanceId} />
      <ProductReviews reviews={reviews} productId={productId} />
    </Container>
  );
};
export default ProductPage;
