import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './user/slice'
import { moviesReducer } from './movies/slice'
import { trendingMoviesReducer } from './trendingMovies/slice'

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    trendingMovies: trendingMoviesReducer,
  },
})

export default store
