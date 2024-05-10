import axios from 'axios'
import { PayloadCreatorProps } from 'store/movies/types'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.params = {
  api_key: '3cfc4cc3ed7c09ed117ed148c7a04c75',
}

export const fetchMovies = async (
  type: PayloadCreatorProps['type'],
  filters?: PayloadCreatorProps['filters'],
  page?: number
) => {
  const endpoints = {
    popular: '/movie/popular',
    byQuery: `/discover/movie?with_genres=${
      filters?.genre?.join(',') || ''
    }&primary_release_year=${filters?.year?.join(',') || ''}&with_text_query
=${filters?.query}`,
    upcoming: '/movie/upcoming',
    queue: '',
    watched: '',
  }

  const movies = await axios.get(`${endpoints[type]}` || 'undefined', {
    params: { page },
  })

  return movies
}

export const fetchMovieById = async (id: string) => {
  const movie = await axios.get(`movie/${id}`)

  return movie.data
}

export const fetchGenres = async () => {
  const genres = await axios.get('/genre/movie/list')

  return genres
}
