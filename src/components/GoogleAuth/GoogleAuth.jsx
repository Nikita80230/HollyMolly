import { loginGoogle } from "src/services/loginGoogle";

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
      <button onClick={handleClick}>Увійти з Google</button>
    </>
  );
};

export default GoogleAuth;
