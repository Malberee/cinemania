import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit'
import { AuthState } from './types'
import {
  auth,
  fetchLibrary,
  initAuth,
  libraryAction,
  logOut,
} from './operation'

const initialState: AuthState = {
  email: null,
  id: null,
  library: [],
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      console.log(action)

      state.email = action.payload.email
      state.id = action.payload.id
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(initAuth.fulfilled, (state, action) => {
        const { email, id, library } = action.payload

        state.email = email
        state.id = id
        state.library = library
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.isLoading = false
        state.email = action.payload.email
        state.id = action.payload.id
      })
      .addCase(logOut.fulfilled, (state) => {
        state.email = null
        state.id = null
        state.library = []
      })
      .addCase(fetchLibrary.fulfilled, (state, action) => {
        state.isLoading = false
        state.library = action.payload
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
      .addMatcher(isPending, (state) => {
        state.isLoading = true
      })
      .addMatcher(isFulfilled, (state) => {
        state.isLoading = false
      })
      .addMatcher(isRejected, (state) => {
        state.isLoading = false
        state.error = 'Error 1234'
      }),
})

export const userReducer = userSlice.reducer
export const { signIn } = userSlice.actions
