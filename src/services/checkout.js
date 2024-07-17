import axios from "axios";

export const checkout = async (orderId) => {
  try {
    const res = await axios.get(`api/Checkout/${orderId}`);
    const redirectToUrl = res.data.redirectToUrl;
    if (redirectToUrl) {
      window.location.href = redirectToUrl; // Перехід на сторінку оплати
    } else {
      throw new Error("URL для редіректу відсутній.");
    }

  } catch (error) {
     throw new Error("Щось пішло не так.");
  }
};