import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Sort = {
  name: string;
  sortProperty: string;
};

interface FilterSliceState {
  search: string;
  categoryId: number;
  sort: Sort;
}

const initialState: FilterSliceState = {
  search: "",
  categoryId: 0,
  sort: {
    name: "Популярности",
    sortProperty: "raiting",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      if ((state.sort.sortProperty !== action.payload.sort?.sortProperty) && action.payload.sort) {
        state.sort = action.payload.sort;
      }
      state.categoryId = Number(action.payload.categoryId);
      state.search = action.payload.search;
    },
  },
});

export const { setCategoryId, setSort, setFilters, setSearch } =
  filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter;


export default filterSlice.reducer;
