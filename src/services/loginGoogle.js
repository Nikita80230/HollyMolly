import axios from "axios";

export const loginGoogle = async () => {
  try {
    const res = await axios.get("api/Account/login/google");
    return res.data.redirectToUrl;
  } catch (error) {
     throw new Error("Щось пішло не так.");
  }
};
