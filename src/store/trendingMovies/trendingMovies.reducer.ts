import { combineReducers, createReducer } from '@reduxjs/toolkit'
import { Movie } from 'types'
import { fetchTrendingMovies } from './trendingMovies.operations'

const trendingMovies = createReducer<Movie[]>([], (builder) =>
  builder.addCase(
    fetchTrendingMovies.fulfilled,
    (_, action) => action.payload.results
  )
)

const isLoading = createReducer(false, (builder) =>
  builder
    .addCase(fetchTrendingMovies.pending, () => true)
    .addCase(fetchTrendingMovies.fulfilled, () => false)
    .addCase(fetchTrendingMovies.rejected, () => false)
)

const error = createReducer<null | string>(null, (builder) =>
  builder
    .addCase(fetchTrendingMovies.pending, () => null)
    .addCase(fetchTrendingMovies.rejected, (_, action) => action.payload)
)

export default combineReducers({ trendingMovies, isLoading, error })
