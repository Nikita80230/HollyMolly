import { useEffect } from "react";
import { useDispatch} from "react-redux";
import ProfileForm from "src/components/ProfileForm/ProfileForm";
import { useAuth } from "src/hooks";
import { getProfile } from "src/redux/user/operations";
import { StyledSection } from "./Styled";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <StyledSection>
      <ProfileForm userEmail={user} />
    </StyledSection>
  );
};

export default ProfilePage;
