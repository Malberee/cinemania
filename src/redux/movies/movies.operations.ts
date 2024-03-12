import { createAsyncThunk } from '@reduxjs/toolkit'
import * as moviesAPI from '../../services/movies-api'
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ type, query }) => {
    const movies = await moviesAPI.fetchMovies(type, query)

    return movies.data
  }
)
