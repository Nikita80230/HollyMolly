import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LeaveFeedback from "src/components/LeaveFeedback/LeaveFeedback";
import ReadFeedbacks from "src/components/ReadFeedbacks/ReadFeedbacks";
import { useAuth } from "src/hooks";
import { routes } from "src/routes";
import { getFeedbacks } from "src/services/getFeedbacks";

const FeedbacksPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFeedbacks(id);

        setProducts(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {products.length !==0 && <ReadFeedbacks products={products} />}
     
      {isLoggedIn ? (
        <LeaveFeedback productId={id} />
      ) : (
        <h2>
          {" "}
          Щоб залишити відгук <Link to={routes.LOGIN}>авторизуйтесь</Link>
        </h2>
      )}
    </>
  );
};

export default FeedbacksPage;
