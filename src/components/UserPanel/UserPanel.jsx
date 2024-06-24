import { NavLink } from "react-router-dom";
import FavoriteIcon from "../../assets/images/like.svg?react";
import BasketIcon from "../../assets/images/shopping-bag.svg?react";
import UserIcon from "../../assets/images/account.svg?react";
import { routes } from "../../routes";
import { StyledUserPanel } from "./Styled";
import { useAuth } from "src/hooks";

const UserPanel = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledUserPanel>
      <NavLink className="userPanelLink" to={routes.FAVORITES}>
        <button className="buttonIcon">
          <FavoriteIcon className="icon" />
        </button>
      </NavLink>
     
      {isLoggedIn ? (
        <NavLink className="userPanelLink" to={routes.PROFILE}>
          <button className="buttonIcon">
            <UserIcon className="icon" />
          </button>
        </NavLink>
      ) : (
        <NavLink className="userPanelLink" to={routes.REGISTER}>
          <button className="buttonIcon">
            <UserIcon className="icon" />
          </button>
        </NavLink>
      )}
       <NavLink className="userPanelLink" to={routes.BASKET}>
        <button className="buttonIcon">
          <BasketIcon className="icon" />
        </button>
      </NavLink>
    </StyledUserPanel>
  );
};

export default UserPanel;
