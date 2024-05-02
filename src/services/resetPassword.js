import axios from "axios";
import { toast } from "react-toastify";

export const resetPassword = async (values) => {
  
  try {
    await axios.put(`/forgetPassword?email=${values.email}&sendEmail=true`);
    toast.success("Пароль скинуто!");
  } catch (error) {
    toast.error("Уууупс, щось пішло не так.");
  }
};
