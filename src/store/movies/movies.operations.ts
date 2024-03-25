import { createAsyncThunk } from '@reduxjs/toolkit'
import * as moviesAPI from '../../services/movies-api'
import { MoviesResponse, PayloadCreatorProps } from './movies.types'
import { AxiosError } from 'axios'

export const fetchMovies = createAsyncThunk<
  MoviesResponse,
  PayloadCreatorProps,
  { rejectValue: string }
>('movies/fetchMovies', async ({ type, filters }, { rejectWithValue }) => {
  try {
    const movies = await moviesAPI.fetchMovies(type, filters)

    return movies.data
  } catch (error) {
    const err = error as AxiosError
    return rejectWithValue(err.message)
  }
})

export const fetchGenres = createAsyncThunk('movies/fetchGenres', async () => {
  const genres = await moviesAPI.fetchGenres()

  return genres.data.genres
})
