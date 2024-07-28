import axios from "axios";

export const getNewPostWarehouses = async (inputValue, city) => {
  try {
    const res = await axios.get(
      `/api/NewPost/warehouses?cityName=${city}&findByString=${inputValue}`
    );

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
