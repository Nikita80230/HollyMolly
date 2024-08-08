import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "src/hooks";
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
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) dispatch(getMyOrders());
  }, [dispatch, isLoggedIn]);

  return (
    <StyledProfilePageLayout>
      <Header />
      <main className="main">
        <ContainerProfile>
          <ProfileAside />
          <WrapperProfileForms>{children}</WrapperProfileForms>
        </ContainerProfile>
      </main>
      <Footer />
    </StyledProfilePageLayout>
  );
};

export default ProfilePageLayout;
