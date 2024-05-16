import {
  createSlice,
  isFulfilled,
  isPending,
  isRejectedWithValue,
} from '@reduxjs/toolkit'
import { UserState } from './types'
import { initAuth, auth, logOut, libraryAction } from './operation'

const initialState: UserState = {
  email: null,
  id: null,
  library: [],
  isLoading: true,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(logOut.fulfilled, (state) => {
        state.email = null
        state.id = null
        state.library = []
      })
      .addCase(libraryAction.fulfilled, (state, action) => {
        if (typeof action.payload === 'object') {
          state.library = [action.payload, ...state.library]

          return
        }

        state.library = state.library.filter(
          (movie) => movie.id !== action.payload
        )
      })
      .addMatcher(isPending(initAuth, auth, logOut, libraryAction), (state) => {
        state.error = null
        state.isLoading = true
      })
      .addMatcher(isFulfilled(initAuth, auth), (state, action) => {
        const { email, id, library } = action.payload

        state.email = email
        state.id = id
        state.library = library
      })
      .addMatcher(
        isFulfilled(initAuth, auth, logOut, libraryAction),
        (state) => {
          state.isLoading = false
        }
      )
      .addMatcher(
        isRejectedWithValue(initAuth, auth, logOut, libraryAction),
        (state, action) => {
          state.isLoading = false
          state.error = action.payload
        }
      ),
})

export const userReducer = userSlice.reducer
