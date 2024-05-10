import { createSlice } from '@reduxjs/toolkit'
import { fetchTrendingMovies } from './operations'
import { trendingMoviesState } from './types'

const initialState: trendingMoviesState = {
  entities: [],
  isLoading: false,
  error: null,
}

const trendingMoviesSlice = createSlice({
  name: 'trendingMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.isLoading = false
        state.entities = action.payload.results
        state.error = null
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload || null
      }),
})

export const trendingMoviesReducer = trendingMoviesSlice.reducer
