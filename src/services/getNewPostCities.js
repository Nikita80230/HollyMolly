import axios from "axios";

export const getNewPostCities = async (inputValue) => {
  try {
    const res = await axios.get(`/api/NewPost/cities?name=${inputValue}`);
    
     return res.data;
  } catch (error) {
    throw new Error("Щось пішло не так.");
  }
};
