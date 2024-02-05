import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.params = {
  api_key: '3cfc4cc3ed7c09ed117ed148c7a04c75',
}

export const getPopularMovies = async () => {
  const { data } = await axios.get('/movie/popular')

  return data.results
}

export const getMoviesByQuery = async (query: string) => {
  const { data } = await axios.get(`/search/movie?query=${query}`)

  return data.results
}

export const getUpcomingMovie = async () => {
  const { data } = await axios.get('/discover/movie')

  return data.results[0]
}
