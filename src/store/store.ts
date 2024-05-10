import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './auth/reducer'
import moviesReducer from './movies/reducer'
import trendingMoviesReducer from './trendingMovies/reducer'

const store = configureStore({
  reducer: {
    // auth: authReducer,
    movies: moviesReducer,
    trendingMovies: trendingMoviesReducer
  },
})

export default store
