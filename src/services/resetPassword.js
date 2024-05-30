import axios from "axios";
import { toast } from "react-hot-toast";


export const resetPassword = async ({ credentials }) => {
  
  try {
    const { userId } = credentials;
    const { resetToken:resetToken, newPassword:newPassword } = credentials;
   const result =await axios.put(`/api/Account/${userId}/password/reset`, {resetToken, newPassword});
    toast.success("Пароль оновлено");
    return result;
  } catch (error) {
    console.error(error);
  }
};
