import { AppDispatch } from "@/redux/store";
import { hideToast, showToast } from "@/redux/toaster-slice";
import { FC } from "react";
import { useDispatch } from "react-redux";

const useToaster = () => {
  const dispatch = useDispatch<AppDispatch>();

  const toast = ({ message,type }: { message: string,type: "danger" | "success" }) => {
    dispatch(showToast({ message ,type}));
    setTimeout(() => dispatch(hideToast()), 2500);
  };

  return toast;
};

export default useToaster;
