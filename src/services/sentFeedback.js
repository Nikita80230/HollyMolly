import axios from "axios";
import { toast } from "react-hot-toast";

export const sentFeedback = async (productId, values) => {
  try {
    const persistedStateString = localStorage.getItem("persist:auth");
    const persistedState = JSON.parse(persistedStateString);
    const token = JSON.parse(persistedState.token);

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    await axios.post(`/api/Products/feedback/${productId}`, values);
  } catch (error) {
    console.error(error);
    toast.error("Потрібно оновити сторінку", {
      position: "top-right",
    });
  }
};
