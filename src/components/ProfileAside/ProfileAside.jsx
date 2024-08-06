import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOutAllDevices } from "src/redux/auth/operations";
import { routes } from "src/routes";
import TitleAuth from "../TitleAuth/TitleAuth";
import { StyledAside } from "./Styled";

const ProfileAside = () => {
  const dispatch = useDispatch();
  return (
    <StyledAside>
      <TitleAuth title={"Мій акаунт"} />
      <nav>
        <ul className="listNavLinks">
          <li>
            {" "}
            <NavLink className="linkAside" to={routes.PROFILE} end>
              <div className="wrapperLink">
                <span>Особисті дані</span>
              </div>
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="linkAside" to={routes.MY_ORDERS}>
              <div className="wrapperLink">
                <span>Мої замовлення</span>
              </div>
            </NavLink>
          </li>

          {/* <li>
            {" "}
            <NavLink className="linkAside" to={routes.SHIPPING_ADDRESSES} end>
              <div className="wrapperLink">
                <span>Адреси доставки</span>
              </div>
            </NavLink>
          </li> */}
          <li>
            {" "}
            <NavLink
              className="linkAside"
              to={routes.HOME}
              end
              onClick={() => dispatch(logOutAllDevices())}
            >
              <div className="wrapperLink">
                <span>Вийти</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </StyledAside>
  );
};

export default ProfileAside;
