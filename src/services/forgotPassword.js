import axios from "axios";

export const forgotPassword = async (values) => {
  try {
    const res = await axios.put(`/api/Account/forgetPassword?sendEmail=true`, values);
    return res;
   
  } catch (error) {
    throw new Error(error.message);
  }
};
