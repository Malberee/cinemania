import { createAsyncThunk } from '@reduxjs/toolkit'
import * as moviesAPI from 'services/movies-api'
import { Genre, MoviesResponse, PayloadCreatorProps } from './types'
import { AxiosError } from 'axios'

export const fetchMovies = createAsyncThunk<
  MoviesResponse,
  PayloadCreatorProps,
  { rejectValue: string }
>(
  'movies/fetchMovies',
  async ({ type, filters, page }, { rejectWithValue }) => {
    try {
      const movies = await moviesAPI.fetchMovies(type, filters, page)

      return movies.data
    } catch (error) {
      const err = error as AxiosError
      return rejectWithValue(err.message)
    }
  }
)

export const fetchGenres = createAsyncThunk<
  Genre[],
  undefined,
  { rejectValue: string }
>('movies/fetchGenres', async (_, { rejectWithValue }) => {
  try {
    const genres = await moviesAPI.fetchGenres()

    return genres.data.genres
  } catch (error) {
    const err = error as AxiosError
    return rejectWithValue(err.message)
  }
})
