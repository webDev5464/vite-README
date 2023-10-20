import { createSlice } from "@reduxjs/toolkit";

export const productStore = createSlice({
  name: "product",
  initialState: {
    value: 0
  },

  reducers: {
    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      state.value -= 1
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = productStore.actions

export default productStore.reducer