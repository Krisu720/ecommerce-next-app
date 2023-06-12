import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  value: {
    message: string;
    type: "danger" | "success" | null
  };
}

const initialState: InitialState = {
  value: {
    message: "",
    type: null
  },
};

const toaster = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    showToast(state, action: PayloadAction<{ message: string,type: "danger" | "success" }>) {
      return {
        value: {
          type:action.payload.type,
          message: action.payload.message,
        },
      };
    },
    hideToast() {
      return {
        value: {
          message: "",
          type: null
        },
      };
    },
  },
});

export const { showToast, hideToast } = toaster.actions;
export default toaster.reducer;
