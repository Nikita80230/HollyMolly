import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileForm from "src/components/ProfileForm/ProfileForm";
import TitleProfile from "src/components/TitleProfile/TitleProfile";
import { getProfile } from "src/redux/user/operations";
import { selectProfile } from "src/redux/user/selectors";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);
  console.log(profile);
  const { firstName, lastName, phoneNumber, dateOfBirth, email } = profile;
  console.log(firstName);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <>
      <TitleProfile />
      <h4>Мої дані</h4>
      <ProfileForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        dateOfBirth={dateOfBirth}
      />
    </>
  );
};

export default ProfilePage;
