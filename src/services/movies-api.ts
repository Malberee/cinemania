import axios from 'axios'
import { PayloadCreatorProps } from 'store/movies/types'

const defaultParams = {
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2ZjNGNjM2VkN2MwOWVkMTE3ZWQxNDhjN2EwNGM3NSIsInN1YiI6IjY0MjJhY2M1NmEzNDQ4MDExMmJhOTkxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BW4UkY4p31hxoX77N5tnncr3h1ZYLNmH4U2aDoO43SI',
  },
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
    ...defaultParams,
  })

  return movies
}

export const fetchMovieById = async (id: string) => {
  const movie = await axios.get(`movie/${id}`, { ...defaultParams })

  return movie.data
}

export const fetchGenres = async () => {
  const genres = await axios.get('/genre/movie/list', {...defaultParams})

  return genres
}
