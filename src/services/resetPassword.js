import axios from "axios";
import { toast } from "react-hot-toast";


export const resetPassword = async ({ credentials }) => {
  
  try {
    const { userId } = credentials;
    const { resetToken:resetToken, newPassword:newPassword } = credentials;
    console.log(newPassword)
    await axios.put(`/api/Account/${userId}/password/reset`, {resetToken, newPassword});
    toast.success("Пароль оновлено");
  } catch (error) {
    toast.error("");
  }
};
