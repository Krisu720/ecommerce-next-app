"use client";

import { ReduxProduct } from "@/types/types";

const getLocalStorageCart = (): ReduxProduct[] => {
  //getting data from local storage
  const get = localStorage.getItem("cart");
  if (get) {
    return JSON.parse(get)
  } else {
    return []
  }
};

const updateLocalStorageCart = (item: ReduxProduct[]) => {
  //updating data to local storage
  localStorage.setItem("cart",JSON.stringify(item))
}

export {getLocalStorageCart,updateLocalStorageCart}