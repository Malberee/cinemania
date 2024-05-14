import {
  createSlice,
  isFulfilled,
  isPending,
  isRejectedWithValue,
} from '@reduxjs/toolkit'
import { fetchGenres, fetchMovies } from './operations'
import { MoviesState } from './types'

const initialState: MoviesState = {
  entities: [],
  genres: [],
  totalPages: 0,
  isLoading: false,
  error: null,
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.totalPages = 0
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.entities = action.payload.results
        state.totalPages = action.payload.total_pages
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload
      })
      .addMatcher(isPending(fetchMovies, fetchGenres), (state) => {
        state.isLoading = true
        state.error = null
      })
      .addMatcher(isFulfilled(fetchMovies, fetchGenres), (state) => {
        state.isLoading = false
      })
      .addMatcher(
        isRejectedWithValue(fetchMovies, fetchGenres),
        (state, action) => {
          state.isLoading = false
          state.error = action.payload
        }
      ),
})

export const moviesReducer = moviesSlice.reducer
