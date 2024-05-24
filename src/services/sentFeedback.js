import axios from "axios";
import { toast } from "react-hot-toast";

export const sentFeedback = async (productId, values) => {
  try {
    const persistedStateString = localStorage.getItem("persist:auth");
    const persistedState = JSON.parse(persistedStateString);
    const token = JSON.parse(persistedState.token);

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    const res = await axios.post(`/api/Products/feedback/${productId}`, values);

    toast.success("Ваш відгук успішно відправлено.");
  } catch (error) {
    console.error(error);
    toast.error("Уууупс, щось пішло не так.");
  }
  // try {

  //    const persistedStateString = localStorage.getItem("persist:auth");
  //      const persistedState = JSON.parse(persistedStateString);

  //      const token = persistedState.token;

  //   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  //   const res = await axios.post(`/api/Products/feedback/${productId}`, values);
  //   console.log(res);
  //   toast.success("Ваш відгук успішно відправлено.");
  // } catch (error) {
  //   toast.error("Уууупс, щось пішло не так.");
  // }
};
