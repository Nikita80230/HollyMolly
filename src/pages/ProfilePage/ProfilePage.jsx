import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileForm from "src/components/ProfileForm/ProfileForm";
import { getProfile } from "src/redux/user/operations";
import { selectUserEmail } from "src/redux/user/selectors";
import { StyledSection } from "./Styled";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const userEmail = useSelector(selectUserEmail);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <StyledSection>
      <ProfileForm userEmail={userEmail} />
    </StyledSection>
  );
};

export default ProfilePage;
