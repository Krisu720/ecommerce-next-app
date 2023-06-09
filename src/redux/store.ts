import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector,TypedUseSelectorHook } from "react-redux";
import cartReducer from "./cart-slice";
import toasterReducer from './toaster-slice'

export const store = configureStore({
  reducer: {
    cartReducer,
    toasterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
