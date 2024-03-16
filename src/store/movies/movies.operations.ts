import { createAsyncThunk } from '@reduxjs/toolkit'
import * as moviesAPI from '../../services/movies-api'
import { PayloadCreatorProps } from './movies.types'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ type, query }: PayloadCreatorProps, { rejectWithValue }) => {
    try {
      const movies = await moviesAPI.fetchMovies(type, query)

      return movies.data
    } catch (error) {
      return rejectWithValue('error')
    }
  }
)

export const fetchGenres = createAsyncThunk('movies/fetchGenres', async () => {
  const genres = await moviesAPI.fetchGenres()

  return genres.data.genres
})
