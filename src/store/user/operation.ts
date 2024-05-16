import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { LibraryActionParams, AuthParams, User } from './types'
import { AxiosError } from 'axios'
import { Movie } from 'types'
import * as userAPI from 'services/user-api'
import { RootState } from 'store/types'

export const initAuth = createAsyncThunk<
  User & { library: Movie[] },
  undefined,
  { rejectValue: string }
>('user/initAuthorization', async (_, { rejectWithValue }) => {
  try {
    const data = await new Promise((resolve, reject) => {
      onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
          const library: Movie[] = await userAPI.fetchLibrary(user.uid)

          resolve({
            email: user.email,
            id: user.uid,
            library: Object.values(library),
          })
        }

        reject('You haven`t account')
      })
    })

    return data as User & { library: Movie[] }
  } catch (error) {
    const err = error as string
    return rejectWithValue(err)
  }
})

export const auth = createAsyncThunk<User, AuthParams, { rejectValue: string }>(
  'user/authorization',
  async ({ email, password, action }, { rejectWithValue }) => {
    try {
      const auth = getAuth()

      if (action === 'login') {
        const { user } = await signInWithEmailAndPassword(auth, email, password)

        const library: Movie[] = await userAPI.fetchLibrary(user.uid)

        return {
          email: user.email,
          id: user.uid,
          library: Object.values(library),
        } as User
      }

      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      return { email: user.email, id: user.uid, library: [] } as User
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

export const libraryAction = createAsyncThunk<
  Movie | number,
  LibraryActionParams,
  { rejectValue: string }
>(
  'user/libraryAction',
  async ({ movie, action }, { rejectWithValue, getState }) => {
    try {
      const { user } = getState() as RootState

      if (action === 'add') {
        await userAPI.addMovieToLibrary(user.id!, movie)

        return movie
      }

      await userAPI.removeMovieFromLibrary(user.id!, movie.id)

      return movie.id
    } catch (error) {
      const err = error as AxiosError
      return rejectWithValue(err.message)
    }
  }
)
