import { Movie } from '../../types'

export type PayloadCreatorProps = {
  type: 'popular' | 'byQuery' | 'queue' | 'watched'
  query?: string
}

export type MoviesResponse = {
  page: number
  results: Movie[]
  total_pages: number
}
