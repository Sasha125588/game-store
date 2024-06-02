import { createSlice } from '@reduxjs/toolkit';

export interface setItemInCartAction {
  type: any;
  payload: any;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state: any, action: setItemInCartAction) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (game: any) => game.id !== action.payload
      );
    },
  },
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
