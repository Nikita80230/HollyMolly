import CardReview from "../CardReview/CardReview";

const ListReviews = ({ reviews }) => {
  console.log(reviews)
  return (
    <ul>
      {reviews.map((review, index) => (
        <CardReview review={review} index={index} key={index} />
      ))}
    </ul>
  );
};

export default ListReviews;
