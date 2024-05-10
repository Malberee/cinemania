import { Movie } from 'types'

export type trendingMoviesState = {
  entities: Movie[]
  isLoading: boolean
  error: null | string
}
