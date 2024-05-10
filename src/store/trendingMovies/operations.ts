import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import * as moviesAPI from 'services/movies-api'
import { MoviesResponse } from 'store/movies/types'

export const fetchTrendingMovies = createAsyncThunk<
  MoviesResponse,
  undefined,
  { rejectValue: string }
>('movies/fetchTrendingMovies', async (_, { rejectWithValue }) => {
  try {
    const movies = await moviesAPI.fetchMovies('popular')

    return movies.data
  } catch (error) {
    const err = error as AxiosError
    return rejectWithValue(err.message)
  }
})
