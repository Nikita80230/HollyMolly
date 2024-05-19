import axios from "axios";
import { toast } from "react-hot-toast";

export const loginGoogle = async () => {
  try {
    const res = await axios.get("api/Account/login/google");
    return res.data.redirectToUrl;
  } catch (error) {
    toast.error("Уууупс, щось пішло не так.");
  }
};
