import axios from 'axios'

export const fetchMovies = async (
  type: 'popular' | 'byQuery' | 'queue' | 'watched',
  query?: string
) => {
  console.log('type: ', type)
  axios.defaults.baseURL = 'https://api.themoviedb.org/3'
  const endpoints = {
    popular:
      'https://api.themoviedb.org/3/movie/popular?api_key=3cfc4cc3ed7c09ed117ed148c7a04c75',
    byQuery: `https://api.themoviedb.org/3/search/movie?query=marvel&api_key=3cfc4cc3ed7c09ed117ed148c7a04c75`,
    queue: '',
    watched: '',
  }

  const movies = await axios.get(endpoints[type])
  console.log('movies: ', movies)

  return movies
}
