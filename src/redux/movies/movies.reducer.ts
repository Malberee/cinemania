import { combineReducers, createReducer } from '@reduxjs/toolkit'
import { fetchMovies } from './movies.operations'

const entities = createReducer(
  { entities: [], page: 0, total_pages: 0 },
  (builder) =>
    builder.addCase(
      fetchMovies.fulfilled,
      (_, action) => action.payload.results
    )
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

const error = createReducer(null, (builder) =>
  builder
    .addCase(fetchMovies.pending, () => null)
    .addCase(fetchMovies.rejected, (_, action) => action.payload)
)

export default combineReducers({
  entities,
  isLoading,
  error,
  page,
  totalPages,
})
