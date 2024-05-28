import { loginGoogle } from "src/services/loginGoogle";
import { ButtonGoogle } from "./Styled";
import GoogleIcon from "src/assets/images/google.svg?react";

const GoogleAuth = () => {
  const handleClick = async () => {
    try {
      const loginUrl = await loginGoogle();
      window.location.href = loginUrl;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ButtonGoogle onClick={handleClick}>
        <GoogleIcon/>Увійдіть з Google</ ButtonGoogle>
    </>
  );
};

export default GoogleAuth;
