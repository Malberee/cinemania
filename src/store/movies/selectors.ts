import { RootState } from "store/types"

export const selectMovies = (state: RootState) => state.movies.entities
export const selectTotalPages = (state: RootState) => state.movies.totalPages
export const selectCurrentPage = (state: RootState) => state.movies.page
export const selectGenreList = (state: RootState) => state.movies.genres
export const selectIsLoading = (state: RootState) => state.movies.isLoading
