import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
} from 'firebase/auth'
import { LibraryActionParams, AuthParams, User } from './types'
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

export const logOut = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>('user/logOut', async (_, { rejectWithValue }) => {
  try {
    const auth = getAuth()

    await signOut(auth)
  } catch (error) {
    const err = error as AxiosError
    return rejectWithValue(err.message)
  }
})

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

export const libraryAction = createAsyncThunk<
  Movie | number,
  LibraryActionParams,
  { rejectValue: string }
>(
  'user/libraryAction',
  async ({ userId, movie, action }, { rejectWithValue }) => {
    try {
      if (action === 'add') {
        await userAPI.addMovieToLibrary(userId, movie)

        return movie
      }

      await userAPI.removeMovieFromLibrary(userId, movie.id)

      return movie.id
    } catch (error) {
      const err = error as AxiosError
      return rejectWithValue(err.message)
    }
  }
)
