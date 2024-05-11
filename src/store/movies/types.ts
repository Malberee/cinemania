import { Movie } from 'types'

export type PayloadCreatorProps = {
  type: 'popular' | 'byQuery' | 'upcoming' | 'library' 
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

export type MoviesState = {
  entities: Movie[]
  genres: Genre[]
  totalPages: number
  isLoading: boolean
  error: null | string
}
