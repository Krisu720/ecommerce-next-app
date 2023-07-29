import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Product } from "@prisma/client";
import { v4 as uuid4 } from "uuid";
import { updateLocalStorageCart } from "./cartPersist";
import { ReduxProduct } from "@/types/types";


interface InitialState {
  value: {
    products: ReduxProduct[];
  };
}

const initialState: InitialState = {
  value: {
    products: [],
  },
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product & { amount: number }>) => {
      //current products in localstorage
      let currentProducts: ReduxProduct[] = [...current(state).value.products];

      const uuid = uuid4();

      //creating object of new product
      const newProduct: ReduxProduct = { ...action.payload, uuid };

      //checking if product with the same id exist
      const check = currentProducts.filter((i) => i.id === newProduct.id);

      //if exist just add more amount then return state
      if (check.length > 0) {
        const changedProducts = currentProducts.map((i) => {
          if (i.id === newProduct.id) {
            const amount = i.amount + newProduct.amount;
            return { ...i, amount };
          } else {
            return i;
          }
        });

        updateLocalStorageCart(changedProducts);
        return {
          value: {
            products: changedProducts,
          },
        };
      }

      //if not exist push new product and return state
      currentProducts.push(newProduct);

      updateLocalStorageCart(currentProducts);
      return {
        value: {
          products: currentProducts,
        },
      };
    },

    changeAmount: (
      state,
      action: PayloadAction<{
        type: "increase" | "decrease";
        uuid: string;
      }>
    ) => {
      let currentProducts: ReduxProduct[] = [...current(state.value.products)];
      let changedProducts: ReduxProduct[] = [];
      if (action.payload.type === "increase") {
        changedProducts = currentProducts.map((i) => {
          return i.uuid === action.payload.uuid
            ? { ...i, amount: i.amount + 1 }
            : i;
        });
      } else if (action.payload.type === "decrease") {
        changedProducts = currentProducts.map((i) => {
          return i.uuid === action.payload.uuid
            ? i.amount > 1
              ? { ...i, amount: i.amount - 1 }
              : i
            : i;
        });
      }

      updateLocalStorageCart(changedProducts);
      return {
        value: {
          products: changedProducts,
        },
      };
    },

    removeFromCart: (state, action: PayloadAction<{ uuid: string }>) => {
      const currentProducts: ReduxProduct[] = [
        ...current(state.value.products),
      ];

      //if product with the same uuid exist return products without this product
      const changedProducts = currentProducts.filter(
        (i) => i.uuid !== action.payload.uuid
      );

      updateLocalStorageCart(changedProducts);
      return {
        value: {
          products: changedProducts,
        },
      };
    },

    removeAll: () => {
      updateLocalStorageCart([]);
      return {
        value: { products: [] },
      };
    },

    setCart: (state, action: PayloadAction<{ data: ReduxProduct[] }>) => {
      return {
        value: {
          products: action.payload.data
        }
      }
    }
  },
});

export const getAmountOfItems = (state: ReduxProduct[]): number =>
  state.reduce((total, item) => total + item.amount, 0);

export const getSubtotal = (state: ReduxProduct[]): number =>
  state.reduce((total, item) => total + item.price * item.amount, 0);

export const { addToCart, changeAmount, removeFromCart, removeAll,setCart } =
  cart.actions;
export default cart.reducer;
