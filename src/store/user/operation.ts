import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth'
import { AuthParams, User } from './types'
import { AxiosError } from 'axios'
import { Movie } from 'types'
import * as userAPI from 'services/user-api'

export const auth = createAsyncThunk<User, AuthParams, { rejectValue: string }>(
  'user/authorization',
  async ({ email, password, action }, { rejectWithValue }) => {
    try {
      const auth = getAuth()

      if (action === 'login') {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        const token = await user.getIdToken()

        return { email: user.email, token: token, id: user.uid } as User
      }

      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const token = await user.getIdToken()

      return { email: user.email, token: token, id: user.uid } as User
    } catch (error) {
      const err = error as AxiosError
      return rejectWithValue(err.message)
    }
  }
)

export const fetchLibrary = createAsyncThunk<
  Movie[],
  string,
  { rejectValue: string }
>('user/fetchLibrary', async (userId, { rejectWithValue }) => {
  try {
    const library = await userAPI.fetchLibrary(userId)

    return Object.values(library)
  } catch (error) {
    const err = error as AxiosError
    return rejectWithValue(err.message)
  }
})

export const addMovieToLibrary = createAsyncThunk<any, {userId: string, movie: Movie}>(
  'user/addMovieToLibrary',
  async ({ userId, movie }) => {
    userAPI.addMovieToLibrary(userId, movie)
  }
)
