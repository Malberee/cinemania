import { createSlice } from '@reduxjs/toolkit'
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
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.entities = action.payload.results
        state.totalPages = action.payload.total_pages
        state.isLoading = false
        state.error = null
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.totalPages = 0
        state.isLoading = false
        state.error = action.payload || null
      })
      .addCase(fetchGenres.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload
        state.isLoading = false
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload || null
      }),
})

export const moviesReducer = moviesSlice.reducer
