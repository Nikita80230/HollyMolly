import axios from "axios";
import { toast } from "react-toastify";

export const resetPassword = async ({ credentials }) => {
  try {
    const { userId } = credentials;
    await axios.put(`/api/Account/${userId}/password/reset`, credentials);
    toast.success("Пароль оновлено");
  } catch (error) {
    toast.error("");
  }
};
