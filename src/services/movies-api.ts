import axios from 'axios'
import { PayloadCreatorProps } from 'store/movies/types'
import { MovieVideo } from 'types'
const API_KEY = import.meta.env.VITE_MOVIEDB_TOKEN

const defaultParams = {
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
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
    library: '',
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
  const genres = await axios.get('/genre/movie/list', { ...defaultParams })

  return genres
}

export const fetchMovieVideos = async (movieId: number) => {
  const { data } = await axios.get(`movie/${movieId}/videos`, {
    ...defaultParams,
  })

  return data.results as MovieVideo[]
}
