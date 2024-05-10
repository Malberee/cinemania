import { RootState } from 'store/types'

export const selectTrendingMovies = (state: RootState) =>
  state.trendingMovies.entities

export const selectIsLoading = (state: RootState) => state.trendingMovies.isLoading

export const selectError = (state: RootState) => state.trendingMovies.error
