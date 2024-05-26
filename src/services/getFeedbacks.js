import axios from "axios";
import { toast } from "react-hot-toast";

export const getFeedbacks = async (productId) => {
  try {
    const res = await axios.get(`/api/Products/feedback/${productId}`);
    return res.data;
  } catch (error) {
    toast.error("Уууупс, щось пішло не так.");
  }
};
