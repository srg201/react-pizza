import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export const fetchPizzas = createAsyncThunk<PizzaItem[], Record<string, string>>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortValue, category, searchStr } = params;
    const { data } = await axios.get<PizzaItem[]>(
      `https://62b21a94c7e53744afc7aab0.mockapi.io/items?${sortValue}${category}${searchStr}&order=asc`
    );
    return data;
  }
);

export type PizzaItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
  raiting: string;
  category: number;
};

interface PizzaSliceState {
  items: PizzaItem[];
  status: string;
}

const initialState: PizzaSliceState = {
  items: [],
  status: "loading",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzaItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<PizzaItem[]>) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const { setItems } = pizzaSlice.actions;
export const selectPizza = (state: RootState) => state.pizza;

export default pizzaSlice.reducer;
