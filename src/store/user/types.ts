import { Movie } from 'types'

export type UserState = {
  email: string | null
  id: string | null
  library: Movie[]
  isLoading: boolean
  error: null | string
}

export type User = {
  email: string
  id: string
  library: Movie[]
}

export type AuthParams = {
  email: string
  password: string
  action: 'login' | 'register'
}

export type LibraryActionParams = {
  movie: Movie
  action: 'add' | 'remove'
}
