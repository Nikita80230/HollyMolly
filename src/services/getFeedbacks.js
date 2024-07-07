import axios from "axios";

export const getFeedbacks = async (productId) => {
  try {
    const res = await axios.get(`/api/Products/feedback/${productId}`);
    console.log(res.data)
    return res.data;
  } catch (error) {
     throw new Error("Щось пішло не так.");
  }
};
