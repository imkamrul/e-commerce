import { ToastOptions, toast } from "react-toastify";

const notify = (
  type: "success" | "info" | "warning" | "error" | "default",
  message: string,
  options: ToastOptions = {}
) => {
  try {
    if (!type || !message) {
      return console.log("Error For Notify:-----------Invalid Input");
    }

    let optionsObject: ToastOptions = {
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      ...options,
    };

    switch (type) {
      case "success":
        return toast.success(message, optionsObject);
      case "info":
        return toast.info(message, optionsObject);
      case "warning":
        return toast.warning(message, optionsObject);
      case "error":
        return toast.error(message, optionsObject);
      default:
        return toast(message, optionsObject);
    }
  } catch (error) {
    console.log("Error For Notify:-----------", error);
  }
};

export default notify;
