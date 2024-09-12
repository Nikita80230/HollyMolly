import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "src/routes";
import ArrowRight from "src/assets/images/arrow-down.svg?react";
import { ContainerProfileMobile } from "./Styled";
import { logOutAllDevices } from "src/redux/auth/operations";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import { getProfile } from "src/redux/user/operations";
import { useAuth } from "src/hooks";

const MobileProfile = () => {
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
        <nav>
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
                  <ArrowRight
                    className={`icon ${isOpen ? "openedIcon" : ""}`}
                  />
                </button>
              </div>
            </li>
          </ul>
        </nav>
        <button type="button" className="buttonLogOut" onClick={handleLogOut}>
          Вийти
        </button>
      </ContainerProfileMobile>
    </section>
  );
};

export default MobileProfile;
