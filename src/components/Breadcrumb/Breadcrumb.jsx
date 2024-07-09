import { NavLink } from "react-router-dom";
import { StyledBreadcrumb } from "./Styled";
import { Fragment } from "react";

const Breadcrumb = ({ structure }) => {
  return (
    <StyledBreadcrumb>
      <div className="breadcrumbs">
        {structure.map((element, index) => {
          if (structure.length - 1 === index) {
            return (
              <span key={index} className="currentLink">
                {element.text}
              </span>
            );
          }

          return (
            <Fragment key={index}>
              <NavLink className="mainLink" to={element.url}>
                {element.text}
              </NavLink>
            </Fragment>
          );
        })}
      </div>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
