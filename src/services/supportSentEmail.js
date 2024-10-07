import axios from "axios";

export const supportSentEmail = async (values) => {
  try {
    await axios.post("/api/Support", values);
  } catch (error) {
    throw new Error("Щось пішло не так.");
  }
};
