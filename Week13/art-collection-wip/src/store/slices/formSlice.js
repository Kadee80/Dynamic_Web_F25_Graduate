import {createSlice} from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    price: 0,
  },
  reducers: {
    // we can make the assumption that the name. we want to change or price will come in as action.payload
    changeName(state, action) {
      // toolkit uses immer, so we can directly mutate state inside of our action creators
      state.name = action.payload
    },
    changePrice(state, action) {
      state.price = action.payload
    },
  },
})

export const formReducer = formSlice.reducer
export const {changeName, changePrice} = formSlice.actions //actionCreators
