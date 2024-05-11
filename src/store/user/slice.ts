import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from './types'
import { auth, fetchLibrary } from './operation'

const initialState: AuthState = {
  email: null,
  id: null,
  token: null,
  library: [],
  isLoading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.email = null
      state.token = null
      state.error = null
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(auth.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.isLoading = false
        state.email = action.payload.email
        state.id = action.payload.id
        state.token = action.payload.token
      })
      .addCase(auth.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload || null
      })
      .addCase(fetchLibrary.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchLibrary.fulfilled, (state, action) => {
        state.isLoading = false
        state.library = action.payload
      })
      .addCase(fetchLibrary.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload || null
      }),
})

export const authReducer = authSlice.reducer
export const { logOut } = authSlice.actions
