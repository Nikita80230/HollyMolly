import axios from "axios";
import { toast } from "react-hot-toast";

export const subscribeSentEmail = async (values) => {
  try {
    const res = await axios.post("/api/NewsSubscriptions", values);
    
    if (res.data === "Subscription has already existed.") {
      toast("Ви вже підписані на розсилку від Holly Molly", {
        duration: 6000,
         position: "top-center",
        style: { width: "1400px", height: "150px" },
        className: "",
      
      })
    
}else if(res.data === "Subscription has been added."){
    toast("Вітаю! Ви підписались на розсилку від Holly Molly", {
      duration: 4000,
       position: "top-center",
      style: { width: "1000px", height: "150px" },
      className: "",
    });
    }
  } catch (error) {
    toast.error("Уууупс, щось пішло не так.");
  }
};
