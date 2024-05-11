import axios from "axios";
import { toast } from "react-hot-toast";


export const forgotPassword = async (values) => {
  
  try {
    await axios.put(`/api/Account/forgetPassword?sendEmail=true`, values);
    toast.success("Щоб завершити зміну пароля, перейдіть за посиланням з поштової скриньки");
  } catch (error) {
    toast.error("Уууупс, щось пішло не так.");
  }
};
