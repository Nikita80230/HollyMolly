import { WrapperReadFeedbacks } from "./Styled";

const ReadFeedbacks = ({ products }) => {
  return (
      <WrapperReadFeedbacks>
          <h1>Відгуки</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.review}</p>
          </li>
        ))}
      </ul>
    </WrapperReadFeedbacks>
  );
};
export default ReadFeedbacks;
