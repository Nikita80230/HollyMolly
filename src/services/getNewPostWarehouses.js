import axios from "axios";

export const getNewPostWarehouses = async (cityKoatuu) => {
  try {
    const res = await axios.get(
      `/api/NewPost/warehouses?cityKoatuu=${cityKoatuu}`
    );

    return res.data;
  } catch (error) {
    throw new Error("Щось пішло не так.");
  }
};
