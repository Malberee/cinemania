import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../types'
import axios from 'axios'
import { getPopularMovies } from '../services/fetchMovies'

type MoviesState = {
  popular: Movie[]
  watched: Movie[]
  queue: Movie[]
}

type Category = 'watched' | 'queue'

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchTodos',
  async () => {
    const response = await getPopularMovies()

    return response
  }
)

const initialState: MoviesState = {
  popular: [],
  watched: [],
  queue: [],
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (
      state,
      action: PayloadAction<{ category: Category; movies: Movie[] }>
    ) => {
      state[action.payload.category] = action.payload.movies
    },
    addMovieToCategory: (
      state,
      action: PayloadAction<{ category: Category; movie: Movie }>
    ) => {
      state[action.payload.category].push(action.payload.movie)
    },
    removeMovieFromCategory: (
      state,
      action: PayloadAction<{ category: Category; movieId: number }>
    ) => {
      state[action.payload.category] = state[action.payload.category].filter(
        (movie) => movie.id !== action.payload.movieId
      )
    },
  },
  extraReducers: {
    [fetchPopularMovies.pending]: (state, action) => {},
    [fetchPopularMovies.fulfilled]: (state, action) => {},
    [fetchPopularMovies.rejected]: (state, action) => {},
  },
})

export const { setMovies } = movieSlice.actions

export default movieSlice.reducer
