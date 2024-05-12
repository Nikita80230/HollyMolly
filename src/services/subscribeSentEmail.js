import axios from "axios";
import { toast } from "react-hot-toast";

export const subscribeSentEmail = async (values) => {
  try {
    const res = await axios.post("/api/NewsSubscriptions", values);
    if (res.data === "Subscription already exist.") {
      return "\u2714  Ваша підписка вже активована";
    } else if (res.data === "Subscription has been added.") {
      return 1;
    }
  } catch (error) {
    toast.error("Уууупс, щось пішло не так.");
  }
};
