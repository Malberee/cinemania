import axios from 'axios'
import { child, get, getDatabase, ref, remove, set } from 'firebase/database'
import { Movie } from 'types'

type credentials = {
  email: string
  password: string
}

export const auth = async (
  credentials: credentials,
  action: 'register' | 'login'
): Promise<{ email: string; token: string }> => {
  const endpoints = {
    register: 'register',
    login: 'auth',
  }

  const { data } = await axios.post(`/${endpoints[action]}`, credentials, {
    baseURL: 'https://63b4325833e46b2e.mokky.dev',
  })

  return { email: data.data.email, token: data.token }
}

export const fetchLibrary = async (userId: string) => {
  const dbRef = ref(getDatabase())

  const library = await get(child(dbRef, `users/${userId}/library`))

  if (library.exists()) {
    return library.val()
  }

  throw new Error('Error')
}

export const addMovieToLibrary = async (userId: string, movie: Movie) => {
  const db = getDatabase()
  const userLibraryRef = ref(db, `users/${userId}/library/${movie.id}`)
  set(userLibraryRef, movie)
}

export const removeMovieFromLibrary = async (
  userId: string,
  movieId: number
) => {
  const db = getDatabase()
  const userLibraryRef = ref(db, `users/${userId}/library/${movieId}`)

  await remove(userLibraryRef)
}
