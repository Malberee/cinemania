import { combineReducers, createReducer } from '@reduxjs/toolkit'
import { fetchGenres, fetchMovies } from './operations'
import { Movie } from 'types'
import { Genre } from './types'

const entities = createReducer<Movie[]>([], (builder) =>
  builder.addCase(fetchMovies.fulfilled, (_, action) => action.payload.results)
)

const page = createReducer(0, (builder) =>
  builder
    .addCase(fetchMovies.pending, () => 0)
    .addCase(fetchMovies.fulfilled, (_, action) => action.payload.page)
    .addCase(fetchMovies.rejected, () => 0)
)

const totalPages = createReducer(0, (builder) =>
  builder
    .addCase(fetchMovies.pending, () => 0)
    .addCase(fetchMovies.fulfilled, (_, action) => action.payload.total_pages)
    .addCase(fetchMovies.rejected, () => 0)
)

const isLoading = createReducer(false, (builder) =>
  builder
    .addCase(fetchMovies.pending, () => true)
    .addCase(fetchMovies.fulfilled, () => false)
    .addCase(fetchMovies.rejected, () => false)
)

const error = createReducer<null | string>(null, (builder) =>
  builder
    .addCase(fetchMovies.pending, () => null)
    .addCase(fetchMovies.rejected, (_, action) => action.payload)
)

const genres = createReducer<Genre[]>([], (builder) =>
  builder.addCase(fetchGenres.fulfilled, (_, action) => action.payload)
)

export default combineReducers({
  entities,
  genres,
  isLoading,
  error,
  page,
  totalPages,
})
