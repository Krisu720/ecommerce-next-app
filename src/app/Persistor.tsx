"use client";

import { setCart } from "@/redux/cart-slice";
import { ReduxProduct } from "@/types/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Persistor = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const res = window.localStorage.getItem("cart");
    const items: ReduxProduct[] = res ? JSON.parse(res) : [];
    dispatch(setCart({ data: items }));
  }, []);

  return <></>;
};

export default Persistor;
