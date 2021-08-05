import PRODUCTS from "../dummy_data";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from "../../models/product";

type ProductListState = {
  products: Product[],
  favourites: string[],
}

const initialState: ProductListState = {
  products: PRODUCTS,
  favourites: [],
};

const addOrRemoveFavourite = (state: ProductListState, action: PayloadAction<string>) => {
  const productId = action.payload;
  if (state.favourites.includes(productId)) {
    state.favourites = state.favourites.filter((val) => val !== productId);
  } else {
    state.favourites.push(productId);
  }
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleFavourite: addOrRemoveFavourite,
    addNew(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    }
  }
});

export const { toggleFavourite, addNew } = productsSlice.actions;
export default productsSlice.reducer;
