import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileForm from "src/components/ProfileForm/ProfileForm";
import TitleProfile from "src/components/TitleProfile/TitleProfile";
import { getProfile } from "src/redux/user/operations";
import { selectUserEmail } from "src/redux/user/selectors";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const userEmail = useSelector(selectUserEmail);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <section>
      <TitleProfile />
      <h4>Мої дані</h4>
      <ProfileForm userEmail={userEmail} />
    </section>
  );
};

export default ProfilePage;
