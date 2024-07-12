import { formatDate } from "src/utils/formatDate";
import StarRatingCard from "../StarRatingCard/StarRatindCard";
import { StyledContainer } from "./Styled";

const CardReview = ({ review, index, colors }) => {
  
  const backgroundColor = colors[index % colors.length];
 
  const formattedDate = formatDate(review.created);
  
  return (
    <StyledContainer key={index} style={{ backgroundColor }}>
      <div className="wrapperNameStars">
        <h4 className="name">{review.authorName}</h4>
        <StarRatingCard rating={review.rating} />
      </div>
      <p className="review">{review.review}</p>
      <span className="dateCreated">{formattedDate}</span>
    </StyledContainer>
  );
}


export default CardReview;