import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from './types'
import { auth } from './operations'

const initialState: AuthState = {
  email: null,
  token: null,
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: builder => builder.addCase(auth)
})

export const authReducer = authSlice.reducer
