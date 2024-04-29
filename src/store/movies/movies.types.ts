import { Movie } from 'types'

export type PayloadCreatorProps = {
  type: 'popular' | 'byQuery' | 'upcoming' | 'queue' | 'watched'
  filters?: {
    query?: string
    genre?: string[]
    year?: string[]
  }
  page?: number
}

export type MoviesResponse = {
  page: number
  results: Movie[]
  total_pages: number
}

export type Genre = {
  id: number
  name: string
}
