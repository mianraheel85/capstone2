import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartProducts: [],
  categoryProducts: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategoryProducts: (state, action) => {
      state.categoryProducts = action.payload;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      state.cartProducts.push(product);
    },
    increaseQty: (state, action) => {
      const product = action.payload;
      state.cartProducts = state.cartProducts.map((p) => {
        if (p.id === product.id) {
          p.qty++;
        }
        return p;
      });
    },
    decreaseQty: (state, action) => {
      const product = action.payload;
      state.cartProducts = state.cartProducts.map((p) => {
        if (p.id === product.id && p.qty > 1) {
          p.qty--;
        }
        return p;
      });
    },
    removeCartItem: (state, action) => {
      const product = action.payload;
      state.cartProducts = state.cartProducts.filter(
        (p) => p.id !== product.id
      );
    },
  },
});

export const {
  setProducts,
  setCategoryProducts,
  addToCart,
  increaseQty,
  decreaseQty,
  removeCartItem,
} = ProductSlice.actions;
export default ProductSlice.reducer;
