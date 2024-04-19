import axios from "axios";
import { toast } from "react-toastify";

export const subscribeSentEmail = async (values) => {
  try {
    await axios.post("/api/NewsSubscriptions", values);
    toast.success("Підписка успішна!");
  } catch (error) {
    toast.error("Уууупс, щось пішло не так.");
  }
};
