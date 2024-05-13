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
import toast from 'react-hot-toast'

export const initAuth = createAsyncThunk<
  User & Movie[],
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

    return data as User & Movie[]
  } catch (error) {
    const err = error as AxiosError
    return rejectWithValue(err.message)
  }
})

export const auth = createAsyncThunk<User, AuthParams, { rejectValue: string }>(
  'user/authorization',
  async ({ email, password, action }, { rejectWithValue }) => {
    try {
      const auth = getAuth()

      if (action === 'login') {
        const { user } = await signInWithEmailAndPassword(auth, email, password)

        toast.success('You are logged in!')

        return { email: user.email, id: user.uid } as User
      }

      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      toast.success('You are logged in!')

      return { email: user.email, id: user.uid } as User
    } catch (error) {
      toast.error('Error!')

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
    toast.success('You are logged out!')
  } catch (error) {
    toast.error('Error!')

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
    toast.error('Error!')

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

        toast.success('Successfully added to library')

        return movie
      }

      await userAPI.removeMovieFromLibrary(userId, movie.id)

      toast.success('Successfully removed from the library')

      return movie.id
    } catch (error) {
      toast.error('Error!')

      const err = error as AxiosError
      return rejectWithValue(err.message)
    }
  }
)
