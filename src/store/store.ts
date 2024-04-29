import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './movies/movies.reducer'
import trendingMoviesReducer from './trendingMovies/trendingMovies.reducer'

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    trendingMovies: trendingMoviesReducer
  },
})

export default store
