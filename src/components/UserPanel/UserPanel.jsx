import { NavLink } from "react-router-dom";
import FavoriteIcon from "../../assets/images/heart.svg?react";
import BasketIcon from "../../assets/images/basket.svg?react";
import UserIcon from "../../assets/images/userHeaderIcon.svg?react";
import { routes } from "../../routes";
import { StyledUserPanel } from "./Styled";
import { useAuth } from "src/hooks";

const UserPanel = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledUserPanel>
      <NavLink className="userPanelLink" to={routes.HOME}>
        <FavoriteIcon className="icon" />
      </NavLink>
      <NavLink className="userPanelLink" to={routes.HOME}>
        <BasketIcon className="icon" />
      </NavLink>
      {isLoggedIn ? (
        <NavLink className="userPanelLink" to={routes.PROFILE}>
          <UserIcon className="icon" />
        </NavLink>
      ) : (
        <NavLink className="userPanelLink" to={routes.REGISTER}>
          <UserIcon className="icon" />
        </NavLink>
      )}
  
    </StyledUserPanel>
  );
};

export default UserPanel;
