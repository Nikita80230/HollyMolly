import axios from "axios";

export const resetPassword = async ({ credentials }) => {
  try {
    const { userId } = credentials;
    const { resetToken: resetToken, newPassword: newPassword } = credentials;
    const result = await axios.put(`/api/Account/${userId}/password/reset`, {
      resetToken,
      newPassword,
    });
    return result;
  } catch (error) {
     throw new Error("Щось пішло не так.");
  }
};
