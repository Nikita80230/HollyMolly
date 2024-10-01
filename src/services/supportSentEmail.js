import axios from "axios";

export const supportSentEmail = async (values) => {
  try {
      const res = await axios.post("/api/Support", values);
      console.log(res.data);
      return res.data;
      
  } catch (error) {
      throw new Error("Щось пішло не так.");
  }
};