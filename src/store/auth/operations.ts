import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import * as authAPI from 'services/auth-api'

export const auth = createAsyncThunk<
  { email: string; token: string },
  {
    email: string
    password: string
  },
  { rejectValue: string }
>('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const user = await authAPI.register(credentials)

    return user
  } catch (error) {
    const err = error as AxiosError
    return rejectWithValue(err.message)
  }
})
