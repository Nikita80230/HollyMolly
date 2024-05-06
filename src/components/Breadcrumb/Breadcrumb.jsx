import { NavLink } from "react-router-dom";
import { StyledBreadcrumb } from "./Styled";

const Breadcrumb = ({ structure }) => {
  const markupArray = [];

  structure.forEach((element, index) => {
    if (structure.length - 1 === index) {
      markupArray.push(<span className="currentLink">{element.text}</span>);
      return;
    }

    markupArray.push(
      <>
        <NavLink className="mainLink" to={element.url}>
          {element.text}
        </NavLink>
        <div className="linksDivider">/</div>
      </>
    );
  });

  return (
    <StyledBreadcrumb>
      {markupArray.map((markupEl) => markupEl)}
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
