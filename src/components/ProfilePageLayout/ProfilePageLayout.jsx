import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "src/hooks";
import MobileProfilePage from "src/pages/MobileProfilePage/MobileProfilePage";
import { getMyOrders } from "src/redux/orders/operations";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProfileAside from "../ProfileAside/ProfileAside";

import {
  ContainerProfile,
  StyledProfilePageLayout,
  WrapperProfileForms,
} from "./Styled";

const ProfilePageLayout = ({ children }) => {
  // const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 564);

  // useEffect(() => {
  //   if (isLoggedIn && !isMobile) dispatch(getMyOrders());
  // }, [dispatch, isLoggedIn]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 564);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledProfilePageLayout>
      <Header />
      <main className="main">
        {!isMobile ? (
          <ContainerProfile>
            <ProfileAside />
            <WrapperProfileForms>{children}</WrapperProfileForms>
          </ContainerProfile>
        ) : (
          <Container>
              {/* <MobileProfilePage/> */}
              {children}
          </Container>
        )}
      </main>
      <Footer />
    </StyledProfilePageLayout>
  );
};

export default ProfilePageLayout;
