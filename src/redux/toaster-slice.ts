import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  value: {
    message: string;
  };
}

const initialState: InitialState = {
  value: {
    message: "",
  },
};

const toaster = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    toast(state, action: PayloadAction<{ message: string }>) {
      return {
        value: {
          message: action.payload.message,
        },
      };
    },
    hideToast() {
      return {
        value: {
          message: "",
        },
      };
    },
  },
});

export const { toast, hideToast } = toaster.actions;
export default toaster.reducer;
