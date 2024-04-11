import { NavLink } from "react-router-dom";

import FavoriteIcon from "../../assets/images/heart.svg?react";
import BasketIcon from "../../assets/images/basket.svg?react";
import UserIcon from "../../assets/images/userHeaderIcon.svg?react";

import { routes } from "../../routes";

import { StyledUserPanel } from "./Styled";

const UserPanel = () => {
  return (
    <StyledUserPanel>
      <NavLink className="userPanelLink" to={routes.HOME}>
        <FavoriteIcon className="icon" />
      </NavLink>
      <NavLink className="userPanelLink" to={routes.HOME}>
        <BasketIcon className="icon" />
      </NavLink>
      <NavLink className="userPanelLink" to={routes.HOME}>
        <UserIcon className="icon" />
      </NavLink>
    </StyledUserPanel>
  );
};

export default UserPanel;
