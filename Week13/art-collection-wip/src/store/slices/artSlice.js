import {createSlice, nanoid} from '@reduxjs/toolkit'

const artSlice = createSlice({
  name: 'art',
  initialState: {
    searchTerm: '',
    art: [], // {id, name, price}
  },
  reducers: {
    // we need to update state.art
    // we need to get out values here from action.payload since the create art form state
    // lives in the form slice
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    addArt(state, action) {
      state.art.push({
        name: action.payload.name,
        price: action.payload.price,
        id: nanoid(),
      })
    },
    removeArt(state, action) {
      // assume the action.payload is the art.id we want to remove
      // use the array.filter() method to remove the item with the matching id
      const updated = state.art.filter((item) => {
        return item.id !== action.payload
      })
      // assign the updated art as the new art list state
      state.art = updated
    },
  },
})

export const artReducer = artSlice.reducer
export const {changeSearchTerm, addArt, removeArt} = artSlice.actions // actionCreators
