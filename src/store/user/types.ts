import { Movie } from 'types'

export type AuthState = {
  email: string | null
  id: string | null
  token: string | null
  library: Movie[]
  isLoading: boolean
  error: null | string
}

export type User = {
  email: string
  id: string
  token: string
}

export type AuthParams = {
  email: string
  password: string
  action: 'login' | 'register'
}

export type LibraryActionParams = {
  userId: string
  movie: Movie
  action: 'add' | 'remove'
}
