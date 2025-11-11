import {configureStore, createSlice} from '@reduxjs/toolkit'

const songSlice = createSlice({
  name: 'song',
  initialState: ['Snakes'],
  reducers: {
    // these are action creators, they generate you action.type and revcieve payload from where you dispatched it
    // name +'/' + functionName
    // 'song/addSong'
    addSong(state, action) {
      // remember we can be bad babies and directly mutate state becuase of toolkit's use of immer
      state.push(action.payload)
    },
    removeSong(state, action) {
      // action.payload is our song name string for these reducers
      // get the index of the song we passed in via payload
      const index = state.indexOf(action.payload)
      // call splice with that index and remoe just the one song
      state.splice(index, 1)
    },
  },
})

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
  },
})

export {store}
export const {addSong, removeSong} = songSlice.actions

// next week begin with traditional calls to redux with console.log
