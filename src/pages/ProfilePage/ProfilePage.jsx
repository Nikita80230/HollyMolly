import ButtonLogOut from "src/components/LogOut/ButtonLogOut";
import { useAuth } from "src/hooks";

const ProfilePage = () => {
  const { user } = useAuth();
  return (
    <>
      <h1>ProfileUser</h1>
      <h2>HELLO, {user}</h2>
      <ButtonLogOut />
    </>
  );
};

export default ProfilePage;
