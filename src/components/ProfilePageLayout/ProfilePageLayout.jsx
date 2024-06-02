import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProfileAside from "../ProfileAside/ProfileAside";
import { ContainerProfile, StyledProfilePageLayout } from "./Styled";

const ProfilePageLayout = ({ children }) => {
  return (
    <StyledProfilePageLayout>
      <Header />
      <main className="main">
        <ProfileAside />
        <ContainerProfile>{children}</ContainerProfile>
      </main>
      <Footer />
    </StyledProfilePageLayout>
  );
};

export default ProfilePageLayout;
