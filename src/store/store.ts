import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/slice'
import { moviesReducer } from './movies/slice'
import { trendingMoviesReducer } from './trendingMovies/slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
    trendingMovies: trendingMoviesReducer,
  },
})

export default store
