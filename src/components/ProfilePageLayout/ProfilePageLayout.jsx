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
