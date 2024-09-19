import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "src/routes";
import ArrowRight from "src/assets/images/arrow-down.svg?react";
import { ContainerProfileMobile, TitleProfile } from "./Styled";
import { logOutAllDevices } from "src/redux/auth/operations";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProfile } from "src/redux/user/operations";
import { useAuth } from "src/hooks";

import ProfileForm from "src/components/ProfileForm/ProfileForm";
import MobileMyOrders from "src/components/MobileMyOrders/MobileMyOrders";

const MobileProfilePage = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIsOpenProfile = () => {
    setIsOpenProfile(!isOpenProfile);
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    dispatch(logOutAllDevices());
    navigate(routes.HOME);
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <section>
      <ContainerProfileMobile>
        <TitleProfile>Мій акаунт</TitleProfile>

        <ul className="listNavLinks">
          <li>
            <div className="wrapperLink" onClick={handleIsOpenProfile}>
              <span className={`spanMobile ${isOpenProfile ? "active" : ""}`}>
                Особисті дані
              </span>
              <button type="button" className="buttonIcon">
                <ArrowRight
                  className={`icon ${isOpenProfile ? "openedIcon" : ""}`}
                />
              </button>
            </div>
            {isOpenProfile && <ProfileForm userEmail={user} />}
          </li>
          <li>
            <div className="wrapperLink" onClick={handleIsOpen}>
              <span className={`spanMobile ${isOpen ? "active" : ""}`}>
                Мої замовлення
              </span>
              <button type="button" className="buttonIcon">
                <ArrowRight className={`icon ${isOpen ? "openedIcon" : ""}`} />
              </button>
            </div>
            {isOpen && <MobileMyOrders />}
          </li>
        </ul>

        <button type="button" className="buttonLogOut" onClick={handleLogOut}>
          Вийти
        </button>
      </ContainerProfileMobile>
    </section>
  );
};

export default MobileProfilePage;
