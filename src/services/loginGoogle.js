import axios from "axios";

export const loginGoogle = async () => {
  try {
    const res = await axios.get("api/Account/login/google");
    console.log(res.data)
   return res.data.redirectToUrl;
  } catch (error) {
     throw new Error("Щось пішло не так.");
  }
};
