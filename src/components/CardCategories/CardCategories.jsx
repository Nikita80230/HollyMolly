import { Link } from "react-router-dom";
import { StyledCardCategories } from "./Styled";


const CardCategories = () => {
  return (
    <StyledCardCategories>
      <Link>
      <div className="wrapperPicture">
        <img />
      </div>
        <p className="textCard">Category</p>
        </Link>
    </StyledCardCategories>
  );
};

export default CardCategories;


