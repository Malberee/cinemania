import axios from 'axios'
import { PayloadCreatorProps } from 'store/movies/movies.types'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.params = {
  api_key: '3cfc4cc3ed7c09ed117ed148c7a04c75',
}

export const fetchMovies = async (
  type: PayloadCreatorProps['type'],
  query?: string
) => {
  const endpoints = {
    popular: '/movie/popular',
    byQuery: `/search/movie?query=${query}`,
    queue: '',
    watched: '',
  }
  const movies = await axios.get(endpoints[type] || 'undefined')

  return movies
}

export const fetchGenres = async () => {
  const genres = await axios.get('/genre/movie/list')
  return genres
}
