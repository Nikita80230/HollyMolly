import { loginGoogle } from "src/services/loginGoogle";
import { ButtonGoogle } from "./Styled";

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
        Увійти з Google</ ButtonGoogle>
    </>
  );
};

export default GoogleAuth;
