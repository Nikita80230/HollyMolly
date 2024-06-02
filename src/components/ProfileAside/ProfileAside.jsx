import { NavLink } from "react-router-dom";
import { routes } from "src/routes";
import ButtonLogOut from "../LogOut/ButtonLogOut";
import { StyledAside } from "./Styled";

const ProfileAside = () => {
  return (
    <StyledAside>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink className="linkAside" to={routes.MY_ORDERS} end>
              <div className="wrapperLink">
                <span>Мої замовлення</span>
              </div>
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="linkAside" to={routes.MY_RETURNS} end>
              <div className="wrapperLink">
                <span>Мої повернення</span>
              </div>
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="linkAside" to={routes.PROFILE} end>
              <div className="wrapperLink">
                <span>Мої дані</span>
              </div>
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="linkAside" to={routes.SHIPPING_ADDRESSES} end>
              <div className="wrapperLink">
                <span>Адреси доставки</span>
              </div>
            </NavLink>
          </li>
        </ul>
        <ButtonLogOut />
      </nav>
    </StyledAside>
  );
};

export default ProfileAside;
